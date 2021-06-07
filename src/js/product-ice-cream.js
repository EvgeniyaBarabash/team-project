(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-ice-cream]'),
    closeModalBtn: document.querySelector('[data-modal-close-ice-cream]'),
    modal: document.querySelector('[data-modal-ice-cream]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();