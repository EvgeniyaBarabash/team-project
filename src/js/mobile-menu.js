(() => {
  const refs = {
    openModalMenu: document.querySelector('[data-menu-open]'),
    closeModalMenu: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalMenu.addEventListener('click', toggleModal);
  refs.closeModalMenu.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();