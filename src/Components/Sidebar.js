/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
class Sidebar {
  constructor() {
    this.run();
  }

  sideToggelMenu(menus) {
    menus.forEach((drop) => {
      const btn = drop.querySelector('.sidebar-drop-title');
      const menu = drop.querySelector('.sidebar-drop-body');

      if (btn && menu) {
        menu.classList.contains('active') ? btn.classList.add('active') : '';
        btn.classList.contains('active') ? menu.classList.add('active') : '';

        btn.addEventListener('click', () => {
          menu.classList.toggle('active');
          btn.classList.toggle('active');
        });
      }
    });
  }

  render() {
    const sideb = document.querySelectorAll('.sidebar');

    sideb.forEach((side) => {
      const sideMenus = side.querySelectorAll('.sidebar-drop');
      const sideItems = side.querySelectorAll('a');

      this.sideToggelMenu(sideMenus);

      window.addEventListener('scroll', () => {
        let current = '';

        sideItems.forEach((item) => {
          const theHref = document.querySelector(item.dataset.href);
          if (theHref) {
            const element = theHref.getBoundingClientRect();
            if (element.bottom <= (window.innerHeight + 100)) {
              current = item;
            }
          }
        });

        sideItems.forEach((item) => {
          if (current && item === current && !item.classList.contains('.active')) {
            item.classList.add('active');

            const sidebarDrop = item.parentNode.parentNode.parentNode;

            if (sidebarDrop.classList.contains('sidebar-drop')) {
              const btnDrop = sidebarDrop.querySelector('.sidebar-drop-title');
              const menuDrop = sidebarDrop.querySelector('.sidebar-drop-body');
              btnDrop.classList.add('active');
              menuDrop.classList.add('active');
            }
          } else if (!item.classList.contains('sidebar-drop-title')) {
            item.classList.remove('active');
          }
        });
      });
    });
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const sidebar = new Sidebar();

export default Sidebar;
