const form = document.querySelector('#reservationForm');
const note = document.querySelector('#formNote');

if (form && note) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    note.hidden = false;
    form.reset();
  });
}
