(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-milkshakes]'),
    closeModalBtn: document.querySelector('[data-modal-close-milkshakes]'),
    modal: document.querySelector('[data-modal-milkshakes]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();