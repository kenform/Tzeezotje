
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
