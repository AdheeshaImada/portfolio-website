import { projects, profile } from './data.js';

const grid = document.querySelector('#projects-grid');
const filters = document.querySelectorAll('[data-filter]');
const safeLink = (url, label, kind) => url ? `<a class="project-link ${kind === 'live' ? 'project-link-live' : ''}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${kind === 'live' ? 'Live site' : 'Source code'} <span aria-hidden="true">↗</span></a>` : '';

function graphic(type) {
  switch (type) {
    case 'educat': return `<div class="art-educat" aria-hidden="true"><div class="mock-sidebar"><span class="mock-dot"></span><i></i><i></i><i></i><i></i></div><div class="mock-app"><div class="mock-app-top"><span>EDUCAT</span><span>ADMIN / OVERVIEW</span></div><div class="mock-welcome">Learning, organized.</div><div class="mock-stat-row"><div><b></b><i></i></div><div><b></b><i></i></div><div><b></b><i></i></div></div><div class="mock-chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div></div>`;
    case 'rugby': return `<div class="art-rugby" aria-hidden="true"><div class="rugby-preview-top"><span>JRC / OFFICIAL</span><span>↗</span></div><div class="rugby-preview-main"><span class="rugby-small-label">STRENGTH · UNITY · PRIDE</span><span class="rugby-preview-title">JAFFNA<br/>RUGBY CLUB</span><div class="rugby-preview-accent"></div></div><div class="rugby-preview-bottom"><i></i><i></i><i></i></div></div>`;
    case 'alien': return `<div class="small-graphic small-graphic-alien"><div class="pixel-star s1">✦</div><div class="pixel-star s2">✦</div><div class="pixel-star s3">✦</div><svg viewBox="0 0 180 100" aria-hidden="true"><path d="M90 18L105 55L137 65L111 78L69 78L43 65L75 55Z" fill="#C6FD77"/><path d="M90 18L90 78M69 78L74 56M111 78L106 56" stroke="#13242C" stroke-width="3"/><path d="M90 2V12M28 55h12M140 55h12" stroke="#C6FD77" stroke-width="2"/></svg><div class="retro-caption">PLAYER 01 · READY</div></div>`;
    case 'js': return `<div class="small-graphic small-graphic-js"><div class="browser-mini"><div class="browser-mini-head"><i></i><i></i><i></i></div><div class="browser-mini-world"><div class="js-sun"></div><div class="js-platform js-p1"></div><div class="js-platform js-p2"></div><div class="js-player"></div><div class="js-ground"></div></div></div></div>`;
    case 'timber': return `<div class="small-graphic small-graphic-timber"><div class="timber-sun"></div><div class="timber-tree"><span></span><span></span><span></span><span></span></div><div class="timber-ground"></div><div class="timber-title">TIMBER<span>_</span></div></div>`;
    case 'data': return `<div class="small-graphic small-graphic-data"><div class="data-axis"><div class="data-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="data-line"><svg viewBox="0 0 180 88" preserveAspectRatio="none" aria-hidden="true"><path d="M5 64L31 52L55 58L79 32L104 43L130 20L154 28L176 10" fill="none" stroke="#c7fc75" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg></div></div><div class="data-caption">DATA / IN MOTION</div></div>`;
    default: return '';
  }
}

function card(project) {
  return `<article class="project-card ${project.featured ? 'project-card-featured' : 'project-card-small'} project-card-${project.id}">
      <div class="project-art" role="img" aria-label="Abstract ${project.title} project graphic; not an actual product screenshot">${graphic(project.graphic)}</div>
      <div class="project-body"><div class="project-overline"><span>${project.categoryLabel}</span><span>${project.number} / 06</span></div>
      <h3>${project.title}<span class="project-subtitle">${project.subtitle}</span></h3>
      <p class="project-description">${project.description}</p>
      <div class="project-bottom"><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-links">${safeLink(project.live, `Open ${project.title} live website in a new tab`, 'live')}${safeLink(project.source, `Open ${project.title} source repository in a new tab`, 'source')}</div></div></div>
    </article>`;
}

function renderProjects(filter='all') {
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter || (filter === 'python' && p.id === 'alien'));
  grid.innerHTML = filtered.map(card).join('');
  grid.classList.toggle('grid-filtered', filter !== 'all');
}

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(btn => { const active = btn === button; btn.classList.toggle('active', active); btn.setAttribute('aria-pressed', String(active)); });
  renderProjects(button.dataset.filter);
}));
renderProjects();
document.querySelector('#total-projects').textContent = String(projects.length).padStart(2, '0');

const html = document.documentElement;
const themeToggle = document.querySelector('#theme-toggle');
try { const stored = localStorage.getItem('adheesha-theme'); if (stored === 'light' || stored === 'dark') html.dataset.theme = stored; } catch (_) { /* storage may be disabled */ }
function updateThemeButton() { themeToggle.setAttribute('aria-label', `Switch to ${html.dataset.theme === 'dark' ? 'light' : 'dark'} theme`); }
updateThemeButton();
themeToggle.addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  updateThemeButton();
  try { localStorage.setItem('adheesha-theme', html.dataset.theme); } catch (_) { /* no storage */ }
});

const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-menu');
function closeMenu() { menu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); }
menuToggle.addEventListener('click', () => {
  const opening = menu.hidden; menu.hidden = !opening; menuToggle.setAttribute('aria-expanded', String(opening)); menuToggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const avatar = document.querySelector('#github-avatar');
avatar.addEventListener('error', () => { avatar.style.display = 'none'; });

const emailLink = document.querySelector('#email-contact');
if (profile.email.trim()) { emailLink.hidden = false; emailLink.href = `mailto:${profile.email.trim()}`; }
document.querySelector('#copyright-year').textContent = new Date().getFullYear();
