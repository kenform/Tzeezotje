
(() => {
  const reservation = document.getElementById('reservation');

  document.addEventListener('click', (event) => {
    const reserveButton = event.target.closest('[data-popup="#popup"], .actions-main__button, a[href="#reservation"]');
    if (!reserveButton || !reservation) return;

    event.preventDefault();
    event.stopPropagation();

    document.documentElement.classList.remove('popup-show');
    document.body.classList.remove('popup-show', 'lock');

    reservation.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, true);

  const form = document.getElementById('reservationForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = form.querySelector('.tz-form-note');
      if (note) note.hidden = false;
      form.reset();
    });
  }
})();


/* tz-final-restaurant-polish */
(() => {
  const sticky = document.querySelector('.tz-sticky-reserve');
  const reservation = document.getElementById('reservation');

  if (!sticky || !reservation) return;

  const toggleSticky = () => {
    if (window.innerWidth > 767) {
      sticky.style.opacity = '0';
      sticky.style.pointerEvents = 'none';
      return;
    }

    const reservationTop = reservation.getBoundingClientRect().top + window.scrollY;
    const current = window.scrollY;
    const shouldShow = current > 420 && current < reservationTop - 220;

    sticky.style.opacity = shouldShow ? '1' : '0';
    sticky.style.pointerEvents = shouldShow ? 'auto' : 'none';
  };

  sticky.style.transition = 'opacity .22s ease, transform .22s ease';
  toggleSticky();
  window.addEventListener('scroll', toggleSticky, { passive: true });
  window.addEventListener('resize', toggleSticky);
})();
