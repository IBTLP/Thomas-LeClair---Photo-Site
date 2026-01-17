(() => {
  const lightbox = document.getElementById('global-lightbox');
  const lightboxImg = document.getElementById('global-lightbox-img');

  if (!lightbox || !lightboxImg) return;

  // OPEN lightbox from any gallery image
  document.addEventListener('click', e => {
    const img = e.target;

    if (img.matches('.gallery-grid img')) {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
    }
  });

  // CLOSE on click
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    lightbox.setAttribute('aria-hidden', 'true');
  });

  // CLOSE on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });

  // Protection
  document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });
})();
