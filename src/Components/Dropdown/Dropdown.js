class Dropdown {
  constructor() {
    this.run();
  }

  // eslint-disable-next-line class-methods-use-this
  build(dropd, button, dropMenu) {
    const dropdown = document.querySelectorAll(dropd);

    dropdown.forEach((drop) => {
      const btn = drop.querySelector(button);
      const menu = drop.querySelector(dropMenu);

      if(drop && drop.classList.contains('active')) {
        menu.classList.add('active');
      }

      if (btn && menu) {
        btn.addEventListener('click', () => {
          menu.classList.toggle('active');
        });
        window.addEventListener('click', (e) => {
          if(e.path) {
            if (e.path[0] !== drop && e.path[0] !== btn && e.path[0] !== menu) {
              if (menu.classList.contains('active')) {
                menu.classList.remove('active');
              }
            }
          }
        });
      }
    });
  }

  render() {
    this.build('.dropdown.click', '.navbar-link', '.navbar-dropdown-clicked');
    this.build('.dropdown.dropdown-click', '.button', '.dropdown-menu');
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const dropdown = new Dropdown();

export default Dropdown;
