/* Demo progress for the documentation screenshots.
 *
 * generate.sh drops this into a throwaway copy of index.html, ahead of
 * js/app.js, so the app boots into a realistic mid-study state instead of an
 * empty one. It is never part of the app or the deploy.
 *
 * The scenario is a Universal attempt twelve days out: the Core regulatory
 * topics well drilled, Type II under way, Type III and the MVAC material
 * barely started. Everything is seeded, so a re-run reproduces the same
 * images.
 */
(() => {
  // generate.sh injects this after the data scripts, so the config is loaded.
  const KEY = EXAM_CONFIG.storageKey;
  const DAY = 24 * 60 * 60 * 1000;
  const now = Date.now();

  let s = 20260824;
  const rand = () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let x = Math.imul(s ^ (s >>> 15), 1 | s);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
  // Shuffles, choice order and interval fuzz all draw from here, so the study
  // screenshot shows the same question every time.
  Math.random = rand;

  const int = (lo, hi) => lo + Math.floor(rand() * (hi - lo + 1));
  const dayKey = ts => {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  // topic -> how much of it has been seen, and the stability range in days.
  // Core (1-11) leads, Type II (14-16) is in progress, Type III (17-19) and
  // the 609 topics (20-22) have barely started.
  const PROFILE = {
    1: { seen: 0.95, stab: [18, 50] },
    2: { seen: 0.9, stab: [14, 45] },
    3: { seen: 0.85, stab: [10, 35] },
    4: { seen: 0.8, stab: [8, 30] },
    5: { seen: 0.75, stab: [6, 24] },
    6: { seen: 0.8, stab: [8, 28] },
    7: { seen: 0.7, stab: [5, 20] },
    8: { seen: 0.7, stab: [5, 20] },
    9: { seen: 0.65, stab: [4, 16] },
    10: { seen: 0.7, stab: [5, 18] },
    11: { seen: 0.6, stab: [3, 12] },
    12: { seen: 0.5, stab: [3, 10] },
    14: { seen: 0.55, stab: [3, 12] },
    15: { seen: 0.45, stab: [2, 8] },
    16: { seen: 0.4, stab: [2, 7] },
    17: { seen: 0.25, stab: [1, 5] },
    20: { seen: 0.2, stab: [1, 4] },
  };

  const cards = {};
  QUESTION_BANK.forEach(q => {
    const p = PROFILE[q.section];
    if (!p || rand() > p.seen) return;
    const stability = p.stab[0] + rand() * (p.stab[1] - p.stab[0]);
    const age = rand() * stability * 1.25; // a slice of the pool is overdue
    const lastReview = now - age * DAY;
    const wrong = rand() < 0.28 ? int(1, 2) : 0;
    cards[q.id] = {
      stability,
      difficulty: 3 + rand() * 5,
      lastReview,
      due: lastReview + stability * DAY,
      reps: int(1, 6),
      lapses: wrong,
      state: 'review',
      wrong,
      right: int(1, 5),
      streak: wrong > 0 && rand() < 0.35 ? 0 : int(1, 3),
    };
  });

  // Thirty days of review counts, unbroken over the last stretch so the
  // streak tile reads like someone actually studying for a date.
  const daily = {};
  for (let i = 29; i >= 0; i--) {
    if (i > 9 && rand() < 0.15) continue; // an off day here and there
    const reviews = i === 0 ? 14 : int(8, 32);
    daily[dayKey(now - i * DAY)] = {
      new: i === 0 ? 4 : int(0, 12),
      reviews,
      correct: Math.round(reviews * (0.72 + rand() * 0.22)),
    };
  }

  const exam = new Date(now + 12 * DAY);

  localStorage.setItem(KEY, JSON.stringify({
    cards,
    settings: {
      newPerDay: 15,
      sections: [],
      examDate: dayKey(exam.getTime()),
      theme: new URLSearchParams(location.search).get('theme') === 'dark' ? 'dark' : 'light',
    },
    daily,
    exams: [
      { date: now - 9 * DAY, type: '608 Core Element', total: 25, correct: 16, passed: false },
      { date: now - 5 * DAY, type: '608 Core Element', total: 25, correct: 21, passed: true },
      { date: now - 2 * DAY, type: '608 Type II (Core + High-Pressure)', total: 50, correct: 38, passed: true },
    ],
    log: [],
  }));

  // generate.sh reads the rendered page height back out of the title to size
  // the capture window; the title is never visible in a screenshot. Measure
  // the body, not the document: the document element is stretched to the
  // viewport, which would pad every short view with empty background.
  addEventListener('load', () => {
    document.title = 'shot ' + Math.ceil(document.body.getBoundingClientRect().height);
  });
})();
