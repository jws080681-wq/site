// Native <details> and normal links work without JavaScript.
// Open an anchored disclosure when a visitor follows a direct fragment link.
function revealAnchor() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener('hashchange', revealAnchor);
revealAnchor();
