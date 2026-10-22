'use strict';

/* ---------- Иконки (набор Lucide, inline SVG) ---------- */
const ICON_PATHS = {
  hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  signal: '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
  book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  lock: '<circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  xCircle: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  fileSearch: '<path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="m9 18-1.5-1.5"/><circle cx="5" cy="14" r="3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
};

function icon(name, size = 16, color = '', strokeWidth = 2) {
  const style = color ? ` style="color:${color}"` : '';
  return `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${style}>${ICON_PATHS[name] || ''}</svg>`;
}

const LAB_ICON = { mail: 'mail', shield: 'shield', activity: 'activity', network: 'network', search: 'search' };

/* ---------- Вспомогательные функции ---------- */
function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
const pad2 = (n) => String(n).padStart(2, '0');

/* ---------- Прогресс (localStorage) ---------- */
const STORAGE_KEY = 'cyberlab-progress';
const SESSION_KEY = 'cyberlab-session-id';

function storageGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function storageSet(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* ignore */ } }
function storageRemove(key) { try { localStorage.removeItem(key); } catch (e) { /* ignore */ } }

function readObject(key) {
  const saved = storageGet(key);
  if (!saved) return {};
  try {
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return parsed;
  } catch (e) { return {}; }
}

function getSessionId() {
  const saved = storageGet(SESSION_KEY);
  if (saved) return saved;
  const rnd = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const id = `session-${rnd}`;
  storageSet(SESSION_KEY, id);
  return id;
}
const getProgress = () => readObject(STORAGE_KEY);
const getResults = () => readObject(`${STORAGE_KEY}-results`);

function saveResult(result) {
  const results = getResults();
  results[result.labId] = result;
  storageSet(`${STORAGE_KEY}-results`, JSON.stringify(results));
  const progress = getProgress();
  progress[result.labId] = { completed: true, score: result.score, updatedAt: result.completedAt };
  storageSet(STORAGE_KEY, JSON.stringify(progress));
}
function resetProgress() {
  storageRemove(STORAGE_KEY);
  storageRemove(`${STORAGE_KEY}-results`);
}

/* ---------- Подсчёт баллов ---------- */
const WEIGHTS = { threat: 25, evidence: 25, analysis: 20, chain: 20, time: 10 };

function ratio(actual, expected) {
  return expected.length === 0 ? 1 : expected.filter((item) => actual.includes(item)).length / expected.length;
}

function calculateScore(scenario, answers) {
  const missedEvidence = scenario.correctEvidence.filter((item) => !answers.evidence.includes(item));
  const extraEvidence = answers.evidence.filter((item) => !scenario.correctEvidence.includes(item));
  const breakdown = {
    threatDetection: answers.threat === scenario.correctThreat ? WEIGHTS.threat : 0,
    evidenceSelection: Math.round(ratio(answers.evidence, scenario.correctEvidence) * WEIGHTS.evidence),
    analysisCorrectness: answers.analysis === scenario.correctAnalysis ? WEIGHTS.analysis : 0,
    chainLogic: answers.chain.length === scenario.correctChain.length
      ? Math.round(answers.chain.filter((item, i) => item === scenario.correctChain[i]).length / scenario.correctChain.length * WEIGHTS.chain)
      : 0,
    time: Math.max(0, Math.round(WEIGHTS.time * (1 - Math.max(0, answers.elapsedSeconds - scenario.targetSeconds) / scenario.targetSeconds))),
    hintPenalty: Math.min(10, answers.hintsUsed * 2),
    total: 0,
  };
  breakdown.total = Math.max(0, Math.min(100,
    breakdown.threatDetection + breakdown.evidenceSelection + breakdown.analysisCorrectness + breakdown.chainLogic + breakdown.time - breakdown.hintPenalty));
  return {
    labId: scenario.labId,
    score: breakdown.total,
    breakdown,
    selectedEvidence: answers.evidence,
    correctEvidence: scenario.correctEvidence,
    missedEvidence,
    extraEvidence,
    selectedChain: answers.chain,
    correctChain: scenario.correctChain,
    hintsUsed: answers.hintsUsed,
    elapsedSeconds: answers.elapsedSeconds,
    completedAt: new Date().toISOString(),
  };
}

function formatElapsed(seconds) {
  return `${pad2(Math.floor(seconds / 60))}:${pad2(Math.floor(seconds % 60))}`;
}

/* ---------- Общие компоненты ---------- */
function brandMark() {
  return `<div class="brand-mark" aria-label="CyberLab">${icon('hexagon', 28, '', 1.6)}<span>CYBER<span>LAB</span></span></div>`;
}

function labCard(lab) {
  return `<article class="surface-card lab-card accent-${lab.color}">
    <div class="lab-visual"><div class="visual-grid"></div><span class="lab-index">${lab.index}</span>
      <div class="lab-icon">${icon(LAB_ICON[lab.icon], 30, '', 1.3)}</div>
      <div class="node-orbit"><span></span><span></span><span></span></div></div>
    <div class="lab-card-body">
      <div class="eyebrow">${lab.category}<span>${lab.index}</span></div>
      <h3>${lab.shortTitle}</h3>
      <p>${lab.description}</p>
      <div class="card-meta"><span>${icon('signal', 13)} ${lab.difficulty}</span><span>${icon('clock', 13)} ${lab.duration}</span></div>
      <a class="text-link" href="#/laboratories/${lab.id}">НАЧАТЬ ${icon('arrowUpRight', 15)}</a>
    </div></article>`;
}

function networkNode(x, y, label, warn) {
  return `<g class="network-node${warn ? ' warning' : ''}"><circle cx="${x}" cy="${y}" r="12"/><circle cx="${x}" cy="${y}" r="4"/><text x="${x + 16}" y="${y + 4}">${label}</text></g>`;
}

function networkVisualization() {
  return `<div class="network-visualization" aria-label="Оригинальная схема вымышленной виртуальной сети" role="img"><svg viewBox="0 0 720 500" aria-hidden="true">
    <defs>
      <linearGradient id="nv-line" x1="0" x2="1"><stop offset="0" stop-color="#168BFF"/><stop offset="1" stop-color="#00E5FF"/></linearGradient>
      <linearGradient id="nv-platform" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a2536"/><stop offset="1" stop-color="#06101b"/></linearGradient>
      <filter id="nv-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <g class="network-atmosphere"><circle cx="355" cy="220" r="138"/><circle cx="355" cy="220" r="174"/></g>
    <g class="network-cloud"><path d="M278 124c-18-31 22-59 51-41 19-36 83-27 87 14 38-5 57 46 24 64H306c-15-3-24-20-28-37Z"/><path d="M324 100c17-15 41-12 52 5"/></g>
    <g class="network-platform"><path d="M80 337 357 182 642 337 359 493Z" fill="url(#nv-platform)"/><path d="M80 337 359 493 642 337"/><path d="M80 337v31l279 156 283-156v-31"/><path d="M151 349 358 464 569 348"/><path d="M209 316 358 399 510 315"/></g>
    <g class="network-grid"><path d="M55 379 190 304 356 397 526 300 676 380"/><path d="M89 260 222 186 365 265 521 176 634 237"/><path d="M141 145 260 79 377 145 509 75 597 123"/><path d="M190 304 222 186 260 79"/><path d="M356 397 365 265 377 145"/><path d="M526 300 521 176 509 75"/></g>
    <g class="network-links" filter="url(#nv-glow)"><path d="M190 304 356 397 526 300"/><path d="M222 186 365 265 521 176"/><path d="M260 79 377 145 509 75"/><path d="M222 186 356 397"/></g>
    <g class="network-nodes">${networkNode(190, 304, 'WEB-01')}${networkNode(356, 397, 'DB-01', true)}${networkNode(526, 300, 'APP-01')}${networkNode(222, 186, 'GW-01')}${networkNode(365, 265, 'LOG-01')}${networkNode(521, 176, 'FW-01')}${networkNode(260, 79, 'USER')}${networkNode(377, 145, 'VAULT')}</g>
    <g class="network-side-card"><rect x="518" y="25" width="155" height="90"/><text x="532" y="47">NETWORK MAP</text><text x="532" y="65">LOCAL / FICTIONAL</text><path d="M532 83h108"/><circle cx="647" cy="43" r="4"/></g>
    <text x="35" y="467" class="network-caption">SIMULATION MAP / LOCAL-01</text>
    <text x="530" y="467" class="network-caption">NODES: 08 · ACTIVE</text>
  </svg></div>`;
}

function pageHeader(kicker, title, text) {
  return `<header class="page-header"><div><div class="kicker">${kicker}</div><h1>${title}</h1></div><p>${text}</p></header>`;
}

function findLab(id) {
  return laboratories.find((item) => item.id === id) || laboratories[0];
}

/* ---------- Страницы ---------- */
function HomePage() {
  const completed = Object.values(getProgress()).filter((item) => item && item.completed).length;
  const total = laboratories.length;
  return `<section class="hero"><div class="hero-visual hero-visual-full">${networkVisualization()}</div></section>
    <div class="section-heading"><div><div class="kicker">[ ДОСТУПНЫЕ СЦЕНАРИИ ]</div><h2>Лаборатории для старта</h2></div>
      <a class="text-link" href="#/laboratories">СМОТРЕТЬ ВСЕ <span>→</span></a></div>
    <section class="lab-grid">${laboratories.map(labCard).join('')}</section>
    <section class="dashboard-strip">
      <div class="stat-panel"><p>${icon('terminal', 14)} Текущий прогресс</p><strong>${pad2(completed)}<small> / ${total}</small></strong>
        <div class="progress-bar"><span style="width:${(completed / total) * 100}%"></span></div></div>
      <div class="stat-panel"><p>${icon('book', 14)} Доступные лаборатории</p><strong>${pad2(total)}<small> модулей</small></strong>
        <div class="progress-bar"><span style="width:100%;background:var(--lime)"></span></div></div>
      <div class="info-panel">${icon('shield', 22, 'var(--cyan)')}<h3>Тренируйся безопасно</h3>
        <p>Все данные внутри CyberLab вымышлены. Никаких реальных атак, сканирования или соединений с внешними системами.</p></div>
    </section>`;
}

let catalogFilter = 'Все';

function LaboratoriesPage() {
  const filters = ['Все', 'Начальный', 'Средний', 'Продвинутый'];
  const filtered = catalogFilter === 'Все' ? laboratories : laboratories.filter((lab) => lab.difficulty === catalogFilter);
  return pageHeader('[ МОДУЛЬ 01 / КАТАЛОГ ]', 'Лаборатории', 'Выберите учебный сценарий. Каждый модуль состоит из вымышленных данных и последовательных шагов расследования.') +
    `<div class="filter-row">${filters.map((item) => `<button type="button" class="filter-button${catalogFilter === item ? ' active' : ''}" data-action="filter" data-value="${item}">${item}</button>`).join('')}</div>
    <div class="catalog-summary"><span>${pad2(filtered.length)} СЦЕНАРИЯ ДОСТУПНО</span><span>ТОЛЬКО ВЫМЫШЛЕННЫЕ ДАННЫЕ · LOCALHOST</span></div>
    <section class="lab-grid">${filtered.map(labCard).join('')}</section>`;
}

function LaboratoryPage(id) {
  const lab = findLab(id);
  return pageHeader(`[ ЛАБОРАТОРИЯ ${lab.index} / БРИФИНГ ]`, lab.title, 'Изучите вводные данные, затем переходите к пошаговому расследованию.') +
    `<div class="detail-layout"><section class="detail-main">
      <div class="eyebrow">ВЫМЫШЛЕННЫЙ СЦЕНАРИЙ · ${lab.category}</div>
      <h2>${lab.shortTitle}</h2>
      <p>${lab.description} Здесь нет реальных сетевых действий: все узлы, события и доказательства созданы специально для обучения.</p>
      <div class="brief-grid">
        <div class="brief-block">${icon('target', 19, 'var(--cyan)')}<div><h3>Цель задания</h3><p>${lab.goal}</p></div></div>
        <div class="brief-block">${icon('lock', 19, 'var(--blue)')}<div><h3>Правила</h3><ul>${lab.rules.map((r) => `<li>${r}</li>`).join('')}</ul></div></div>
        <div class="brief-block">${icon('checkCircle', 19, 'var(--lime)')}<div><h3>Ожидаемый результат</h3><p>${lab.expectedResult}</p></div></div>
      </div>
      <div class="steps">${lab.steps.map((step, i) => `<div class="step"><span class="step-number">0${i + 1}</span><span>${step}</span>${icon('checkCircle', 16, 'var(--line-bright)')}</div>`).join('')}</div>
    </section>
    <aside class="side-panel"><h3>Параметры модуля</h3>
      <dl><dt>Уровень</dt><dd>${lab.difficulty}</dd><dt>Рекомендуемое время</dt><dd>${lab.duration}</dd><dt>Стабильный ID</dt><dd>${lab.id}</dd><dt>Режим</dt><dd>Автономный, localhost</dd></dl>
      <a class="button" href="#/investigation/${lab.id}">НАЧАТЬ ${icon('arrowRight', 15)}</a>
    </aside></div>`;
}

/* --- Расследование: состояние --- */
let inv = null;
let invTimer = null;

function stopTimer() {
  if (invTimer) { window.clearInterval(invTimer); invTimer = null; }
}

function startInvestigation(id) {
  stopTimer();
  const lab = findLab(id);
  const scenario = investigations[lab.id] || investigations['phishing-email'];
  inv = {
    lab, scenario,
    evidence: [], threat: '', analysis: '',
    chain: scenario.correctChain.map(() => ''),
    hintsUsed: 0, elapsed: 0, submitted: false,
  };
  invTimer = window.setInterval(() => {
    if (!inv) return;
    inv.elapsed += 1;
    const el = document.getElementById('timer-text');
    if (el) el.textContent = formatElapsed(inv.elapsed);
  }, 1000);
}

function canSubmit() {
  return Boolean(inv.threat && inv.analysis && inv.evidence.length > 0 && inv.chain.every(Boolean));
}

function InvestigationPage() {
  const { lab, scenario } = inv;
  const materials = caseMaterials[lab.id] || caseMaterials['phishing-email'];
  const hint = inv.hintsUsed > 0 ? scenario.hints[inv.hintsUsed - 1] : '';
  const optionButtons = (options, current, action) => options
    .map((option, i) => `<button type="button" class="choice-button${current === option ? ' selected' : ''}" data-action="${action}" data-index="${i}">${esc(option)}</button>`).join('');

  const side = inv.submitted
    ? `<p class="submission-ok">${icon('check', 15)} Ответ сохранён локально</p>
       <a class="button" href="#/results/${lab.id}">ПОСМОТРЕТЬ РЕЗУЛЬТАТ ${icon('arrowRight', 15)}</a>`
    : `<button type="button" class="button" data-action="submit"${canSubmit() ? '' : ' disabled'}>ЗАВЕРШИТЬ РАССЛЕДОВАНИЕ ${icon('arrowRight', 15)}</button>`;

  return pageHeader(`[ ACTIVE CASE / ${lab.index} ]`, 'Расследование', `Дело ${lab.shortTitle}. Все события ниже являются учебной реконструкцией.`) +
    `<div class="investigation-layout"><section class="detail-main investigation-main">
      <div class="investigation-toolbar"><div class="eyebrow">${icon('fileSearch', 14)} ВЫМЫШЛЕННЫЙ КЕЙС / ${lab.category}</div>
        <div class="timer">${icon('clock', 15)} <span id="timer-text">${formatElapsed(inv.elapsed)}</span></div></div>
      <h2>Собери картину события</h2>
      <p>${lab.description} Выбирайте только те признаки, которые можно подтвердить материалами задания.</p>

      <div class="investigation-section case-materials">
        <div class="section-label">МАТЕРИАЛЫ ДЕЛА / ИСХОДНЫЕ ДАННЫЕ</div>
        <h3>${esc(materials.title)}</h3>
        <ul>${materials.lines.map((line) => `<li>${esc(line)}</li>`).join('')}</ul>
        <p class="side-muted">Это вымышленные учебные данные. Сопоставьте их с доказательствами ниже.</p>
      </div>

      <div class="investigation-section"><div class="section-label">01 / ДОКАЗАТЕЛЬСТВА <span>выбрано: ${inv.evidence.length}</span></div>
        <div class="evidence-grid">${scenario.evidence.map((item) => {
          const on = inv.evidence.includes(item.id);
          return `<button type="button" class="evidence-card${on ? ' selected' : ''}" data-action="toggle-evidence" data-id="${item.id}"><span class="evidence-kind">${item.kind}</span><span>${esc(item.label)}</span><span class="evidence-check">${on ? icon('check', 15) : '+'}</span></button>`;
        }).join('')}</div></div>

      <div class="investigation-section"><div class="section-label">02 / УГРОЗА</div>
        <div class="option-grid">${optionButtons(scenario.threatOptions, inv.threat, 'set-threat')}</div></div>

      <div class="investigation-section"><div class="section-label">03 / АНАЛИЗ</div>
        <div class="option-grid">${optionButtons(scenario.analysisOptions, inv.analysis, 'set-analysis')}</div></div>

      <div class="investigation-section"><div class="section-label">04 / ЦЕПОЧКА СОБЫТИЙ</div>
        <div class="chain-list">${inv.chain.map((value, index) => `<label class="chain-row"><span class="step-number">0${index + 1}</span>
          <select data-action="chain" data-index="${index}"><option value="">Выберите событие</option>${scenario.chainOptions.map((c) => `<option value="${esc(c)}"${value === c ? ' selected' : ''}>${esc(c)}</option>`).join('')}</select>${icon('chevronDown', 15)}</label>`).join('')}</div></div>
    </section>

    <aside class="side-panel investigation-side">${icon('lock', 24, 'var(--cyan)')}<h3>Контрольная точка</h3>
      <p class="side-muted">Оценка учитывает угрозу, доказательства, анализ, цепочку и время. Время важно, но не может перекрыть качество расследования.</p>
      <div class="hint-panel"><div class="hint-title">${icon('bulb', 15)} ПОДСКАЗКИ ${inv.hintsUsed}/3</div>
        ${hint ? `<p>${esc(hint)}</p>` : ''}
        ${inv.hintsUsed < 3 ? `<button type="button" class="filter-button" data-action="hint">ОТКРЫТЬ УРОВЕНЬ ${inv.hintsUsed + 1}</button>` : '<span class="hint-limit">Все подсказки использованы</span>'}
      </div>${side}</aside></div>`;
}

function resultList(label, items, kind) {
  const color = kind === 'miss' ? 'var(--orange)' : 'var(--red)';
  const body = items.length
    ? items.map((item) => `<div class="result-list-item">${kind === 'check' ? icon('checkCircle', 14, 'var(--lime)') : icon('xCircle', 14, color)}${esc(evidenceLabel(item))}</div>`).join('')
    : '<div class="result-list-empty">Нет записей</div>';
  return `<div class="result-list"><h3>${label}</h3>${body}</div>`;
}

/* В результатах хранятся id доказательств — показываем понятные подписи */
function evidenceLabel(id) {
  for (const key of Object.keys(investigations)) {
    const found = investigations[key].evidence.find((e) => e.id === id);
    if (found) return found.label;
  }
  return id;
}

function ResultsPage(id) {
  const lab = findLab(id || 'phishing-email');
  const result = getResults()[lab.id];
  if (!result) {
    return pageHeader('[ CASE NOT FOUND ]', 'Нет результата', 'Сначала завершите расследование, чтобы увидеть разбор.') +
      `<div class="empty-state">${icon('target', 24)}<p>Для этой лаборатории ещё нет сохранённого результата.</p>
        <a class="button" href="#/investigation/${lab.id}">НАЧАТЬ РАССЛЕДОВАНИЕ</a></div>`;
  }
  const recommendation = result.score >= 85
    ? 'Отличная работа. Попробуйте повторить кейс без подсказок и сравнить время.'
    : result.score >= 60
      ? 'База сформирована. Повторите анализ пропущенных доказательств и цепочки.'
      : 'Вернитесь к брифингу и пройдите сценарий ещё раз, сверяя каждый вывод с фактами.';
  const b = result.breakdown;
  return pageHeader(`[ CASE CLOSED / ${lab.index} ]`, 'Результат', `Прозрачный разбор решения по лаборатории «${lab.title}».`) +
    `<div class="result-grid">
      <section class="result-card result-overview"><div class="eyebrow">ИТОГОВАЯ ОЦЕНКА</div>
        <div class="result-score">${result.score}<small>%</small></div><p>${recommendation}</p>
        <div class="result-facts"><span>${icon('clock', 14)} ${formatElapsed(result.elapsedSeconds)}</span><span>${icon('bulb', 14)} подсказок: ${result.hintsUsed}</span></div>
        <a class="button" href="#/laboratories">${icon('arrowLeft', 15)} К ЛАБОРАТОРИЯМ</a></section>
      <section class="result-card"><div class="eyebrow">РАЗБИВКА БАЛЛА</div><h2>Что повлияло</h2>
        <ul class="score-list">
          <li><span>Обнаружение угрозы</span><strong>${b.threatDetection} / 25</strong></li>
          <li><span>Выбор доказательств</span><strong>${b.evidenceSelection} / 25</strong></li>
          <li><span>Правильность анализа</span><strong>${b.analysisCorrectness} / 20</strong></li>
          <li><span>Логика цепочки</span><strong>${b.chainLogic} / 20</strong></li>
          <li><span>Время выполнения</span><strong>${b.time} / 10</strong></li>
          <li class="penalty"><span>Штраф за подсказки</span><strong>−${b.hintPenalty}</strong></li>
        </ul></section></div>
    <div class="result-details">
      <section class="result-card"><div class="eyebrow">ДОКАЗАТЕЛЬСТВА</div><h2>Разбор выбора</h2>
        ${resultList('Найденные правильные', result.selectedEvidence.filter((i) => result.correctEvidence.includes(i)), 'check')}
        ${resultList('Пропущенные', result.missedEvidence, 'miss')}
        ${resultList('Лишние', result.extraEvidence, 'extra')}</section>
      <section class="result-card"><div class="eyebrow">ПОСЛЕДОВАТЕЛЬНОСТЬ</div><h2>Цепочка событий</h2>
        <div class="chain-result">${result.selectedChain.map((item, index) => {
          const ok = item === result.correctChain[index];
          return `<div class="chain-result-row ${ok ? 'correct' : 'wrong'}"><span>0${index + 1}</span>${esc(item || 'Не выбрано')}${ok ? icon('checkCircle', 15) : icon('xCircle', 15)}</div>`;
        }).join('')}</div>
        <div class="recommendation"><strong>РЕКОМЕНДАЦИЯ</strong><p>${recommendation}</p></div></section></div>`;
}

function ProgressPage() {
  const sessionId = getSessionId();
  const progress = getProgress();
  const results = getResults();
  const total = laboratories.length;
  const completed = laboratories.filter((lab) => progress[lab.id] && progress[lab.id].completed).length;
  const average = completed ? Math.round(laboratories.reduce((sum, lab) => sum + ((progress[lab.id] && progress[lab.id].score) || 0), 0) / completed) : 0;
  return pageHeader('[ АНОНИМНАЯ СЕССИЯ / LOCAL STORAGE ]', 'Мой прогресс', 'Результаты хранятся только в этом браузере. Личный аккаунт, логин и персональные данные не нужны.') +
    `<div class="dashboard-strip">
      <div class="stat-panel"><p>Завершено лабораторий</p><strong>${completed}<small> / ${total}</small></strong><div class="progress-bar"><span style="width:${completed / total * 100}%"></span></div></div>
      <div class="stat-panel"><p>Средний результат</p><strong>${average}<small>%</small></strong><div class="progress-bar"><span style="width:${average}%;background:var(--lime)"></span></div></div>
      <div class="info-panel">${icon('trophy', 22, 'var(--orange)')}<h3>Учебная сессия</h3><p>Пройдено сценариев: ${completed}. Сессия ${esc(sessionId.slice(-8))} — технический идентификатор без связи с личностью.</p></div>
    </div>
    <div class="section-heading"><h2>История расследований</h2><button type="button" class="filter-button" data-action="reset">${icon('rotate', 13)} ОЧИСТИТЬ ПРОГРЕСС</button></div>
    <div class="progress-history">${laboratories.map((lab) => {
      const r = results[lab.id];
      return `<div class="history-row"><span class="step-number">${lab.index}</span><span class="history-title">${lab.title}</span>${r
        ? `<span class="history-score">${r.score}%</span><span class="history-time">${formatElapsed(r.elapsedSeconds)}</span><a class="text-link" href="#/results/${lab.id}">РАЗБОР</a>`
        : `<span class="history-status">НЕ НАЧАТО</span><a class="text-link" href="#/laboratories/${lab.id}">ОТКРЫТЬ</a>`}</div>`;
    }).join('')}</div>`;
}

/* ---------- Шапка / подвал ---------- */
let menuOpen = false;

function renderHeader(path) {
  const items = [
    { to: '#/', label: 'Главная', ico: 'home', active: path === '/' || path === '' },
    { to: '#/laboratories', label: 'Лаборатории', ico: 'grid', active: path.startsWith('/laboratories') },
    { to: '#/progress', label: 'Мой прогресс', ico: 'chart', active: path.startsWith('/progress') },
  ];
  document.getElementById('header').innerHTML =
    `<header class="topbar"><a href="#/" class="brand-link">${brandMark()}</a>
      <button type="button" class="menu-toggle" data-action="menu" aria-label="Открыть меню">${icon(menuOpen ? 'x' : 'menu', 20)}</button>
      <nav class="main-nav${menuOpen ? ' main-nav-open' : ''}">${items.map((i) => `<a href="${i.to}" class="nav-link${i.active ? ' active' : ''}">${icon(i.ico, 14)}${i.label}</a>`).join('')}</nav>
      <div class="system-status"><span class="status-dot"></span> СИСТЕМА ОНЛАЙН <small>LOCALHOST</small></div></header>`;
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `<footer class="footer">${brandMark()}<span>ВЫМЫШЛЕННАЯ СРЕДА · БЕЗОПАСНОЕ ОБУЧЕНИЕ</span></footer>`;
}

/* ---------- Роутер ---------- */
let currentRoute = { name: 'home', id: null };

function parseRoute() {
  const path = (location.hash.replace(/^#/, '') || '/').replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  let route = { name: 'home', id: null };
  if (parts[0] === 'laboratories') route = parts[1] ? { name: 'lab', id: parts[1] } : { name: 'labs', id: null };
  else if (parts[0] === 'investigation') route = { name: 'investigation', id: parts[1] || 'phishing-email' };
  else if (parts[0] === 'results') route = { name: 'results', id: parts[1] || 'phishing-email' };
  else if (parts[0] === 'progress') route = { name: 'progress', id: null };
  return { path, route };
}

function renderPage() {
  const main = document.getElementById('page');
  switch (currentRoute.name) {
    case 'labs': main.innerHTML = LaboratoriesPage(); break;
    case 'lab': main.innerHTML = LaboratoryPage(currentRoute.id); break;
    case 'investigation': main.innerHTML = InvestigationPage(); break;
    case 'results': main.innerHTML = ResultsPage(currentRoute.id); break;
    case 'progress': main.innerHTML = ProgressPage(); break;
    default: main.innerHTML = HomePage();
  }
}

function handleRoute() {
  const { path, route } = parseRoute();
  currentRoute = route;
  menuOpen = false;
  if (route.name === 'investigation') startInvestigation(route.id);
  else { stopTimer(); inv = null; }
  renderHeader(path);
  renderPage();
  window.scrollTo(0, 0);
}

/* ---------- События ---------- */
document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target || target.tagName === 'SELECT') return;
  const action = target.dataset.action;

  switch (action) {
    case 'menu': {
      menuOpen = !menuOpen;
      renderHeader(parseRoute().path);
      break;
    }
    case 'filter':
      catalogFilter = target.dataset.value;
      renderPage();
      break;
    case 'toggle-evidence': {
      const id = target.dataset.id;
      inv.evidence = inv.evidence.includes(id) ? inv.evidence.filter((e) => e !== id) : [...inv.evidence, id];
      renderPage();
      break;
    }
    case 'set-threat':
      inv.threat = inv.scenario.threatOptions[Number(target.dataset.index)];
      renderPage();
      break;
    case 'set-analysis':
      inv.analysis = inv.scenario.analysisOptions[Number(target.dataset.index)];
      renderPage();
      break;
    case 'hint':
      if (inv.hintsUsed < 3) inv.hintsUsed += 1;
      renderPage();
      break;
    case 'submit': {
      if (!canSubmit() || inv.submitted) return;
      const result = calculateScore(inv.scenario, {
        threat: inv.threat, evidence: inv.evidence, analysis: inv.analysis,
        chain: inv.chain, elapsedSeconds: inv.elapsed, hintsUsed: inv.hintsUsed,
      });
      saveResult(result);
      inv.submitted = true;
      stopTimer();
      renderPage();
      break;
    }
    case 'reset':
      resetProgress();
      renderPage();
      break;
    default:
  }
});

document.addEventListener('change', (event) => {
  const target = event.target;
  if (target.matches && target.matches('select[data-action="chain"]') && inv) {
    inv.chain[Number(target.dataset.index)] = target.value;
    // обновляем только состояние кнопки «Завершить», чтобы не сбрасывать фокус селекта
    const submitBtn = document.querySelector('[data-action="submit"]');
    if (submitBtn) submitBtn.disabled = !canSubmit();
  }
});

window.addEventListener('hashchange', handleRoute);

/* ---------- Старт ---------- */
renderFooter();
handleRoute();
