/* eslint-disable no-unused-expressions */
class Modal {
  constructor() {
    this.run();
  }

  // eslint-disable-next-line class-methods-use-this
  closeModal(triggerClose, containerModal) {
    triggerClose.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        containerModal.classList.toggle('active');
      });
    });
  }

  render() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');

    modalTriggers.forEach((trigger) => {
      const modalContainer = document.querySelector(trigger.dataset.modalTrigger);

      if (modalContainer) {
        const modalClose = modalContainer.querySelectorAll('.close');
        const modalCloseTrigger = modalContainer.querySelectorAll('.modal-trigger');

        trigger.addEventListener('click', () => {
          modalContainer.classList.toggle('active');
        });

        modalCloseTrigger && this.closeModal(modalCloseTrigger, modalContainer);
        modalClose && this.closeModal(modalClose, modalContainer);
      }
    });
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const modal = new Modal();

export default Modal;
