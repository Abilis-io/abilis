class Close {
  constructor(container) {
    this.container = container;

    this.run();
  }

  render() {
    const contain = document.querySelectorAll(this.container);

    contain.forEach((e) => {
      const btnClose = e.querySelector('[data-close]');
      if (btnClose) {
        btnClose.addEventListener('click', () => {
          e.remove();
        });
      }
    });
  }

  run() {
    this.render();
  }
}

export default Close;
