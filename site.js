// Hamburger menu
function toggleMenu(e) {
  if (e) e.stopPropagation();
  setMenu(!document.getElementById('menu-panel').classList.contains('open'));
}
function setMenu(open) {
  document.getElementById('menu-panel').classList.toggle('open', open);
  document.getElementById('menu-btn').classList.toggle('open', open);
}
document.addEventListener('click', () => setMenu(false));

// PWA service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// Secret shortcut to terminal: press ` or ~ anywhere
window.addEventListener('keydown', (e) => {
  if ((e.key === '`' || e.key === '~') && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
      window.location.href = '/terminal/';
    }
  }
});

