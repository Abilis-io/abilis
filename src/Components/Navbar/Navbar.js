/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
class Navbar {
  constructor() {
    this.nav = document.querySelector('#navbar');
    this.navToggles = [
      '.navbar-toggle-1',
      '.navbar-toggle-2',
      '.navbar-toggle-3',
      '.navbar-toggle-4',
    ];

    this.run();
  }

  navDropClick(statut, navdrop, dropdown, linked) {
    const link = navdrop.querySelector(linked);
    const drop = navdrop.querySelector(dropdown);

    if (drop && link) {
      if (statut === 'close') {
        if (drop.classList.contains('open')) {
          drop.classList.remove('open');
          link.classList.remove('open');
        }
      } else {
        drop.classList.toggle('open');
        link.classList.toggle('open');
      }
    }
  }

  navbarToggle(navToggle) {
    navToggle.forEach((nav) => {
      // MOBILE
      const toggleMenu = document.querySelector(nav.dataset.toggleMenu);
      const navDropdown = document.querySelectorAll('.navbar-menu .navbar-item.dropdown');

      nav.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggleMenu.classList.remove('open');
          navDropdown.forEach((navDrop) => {
            if (navDrop.classList.contains('click')) {
              this.navDropClick('close', navDrop, '.navbar-dropdown-clicked', '.navbar-link');
            } else {
              this.navDropClick('close', navDrop, '.navbar-dropdown', '.navbar-link');
            }
          });
        } else {
          nav.classList.add('open');
          toggleMenu.classList.add('open');
        }
      });

      const btnClose = toggleMenu.querySelector('.close');
      if (btnClose) {
        btnClose.addEventListener('click', () => {
          toggleMenu.classList.toggle('open');
          if (nav.classList.contains('open')) {
            nav.classList.remove('open');
          }
        });
      }
      // MOBILE

      // DROPDOWN
      navDropdown.forEach((navDrop) => {
        navDrop.querySelector('.navbar-link').addEventListener('click', () => {
          if (navDrop.classList.contains('click')) {
            this.navDropClick('open', navDrop, '.navbar-dropdown-clicked', '.navbar-link');
          } else {
            this.navDropClick('open', navDrop, '.navbar-dropdown', '.navbar-link');
          }
        });
      });
      // DROPDOWN
    });
  }

  navbarSticky(navbar) {
    if (navbar) {
      const datasClassBefore = navbar.querySelectorAll('[data-sticky-class-before]');
      const datasClassAfter = navbar.querySelectorAll('[data-sticky-class-after]');

      const stickyClassAction = (item, data, type) => {
        const classToAdd = data.split(' ');
        classToAdd.forEach((e) => {
          type === 'add' ? item.classList.add(e) : item.classList.remove(e);
        });
      };

      const stickyClassActionCondition = (classType, action) => {
        (classType === 'before' ? navbar.dataset.stickyClassBefore : navbar.dataset.stickyClassAfter) ? stickyClassAction(navbar, (classType === 'before' ? navbar.dataset.stickyClassBefore : navbar.dataset.stickyClassAfter), action) : '';
        datasClassBefore.forEach((e) => stickyClassAction(e, (classType === 'before' ? e.dataset.stickyClassBefore : e.dataset.stickyClassAfter), action));
      };

      const classToStickyAction = (type) => {
        if (type === 'sticky') {
          stickyClassActionCondition('before', 'remove');
          stickyClassActionCondition('after', 'add');
        } else {
          stickyClassActionCondition('before', 'add');
          stickyClassActionCondition('after', 'remove');
        }
      };

      stickyClassActionCondition('before', 'add');

      // TYPE 1
      const { stickyType } = navbar.dataset;

      if (stickyType) {
        navbar.classList.add(stickyType);

        const stickyClassToggle = (e, type) => {
          const el = type === 'before' ? e.dataset.stickyClassBefore : e.dataset.stickyClassAfter;
          el.split(' ').forEach((val) => {
            e.classList.toggle(val, (type === 'before' ? window.scrollY <= 0 : window.scrollY > 0));
          });
        };

        const stickyPerso = () => {
          navbar.classList.toggle('sticky-active', window.scrollY > 0);

          navbar.dataset.stickyClassBefore ? stickyClassToggle(navbar, 'before') : '';
          datasClassBefore.forEach((e) => stickyClassToggle(e, 'before'));
          navbar.dataset.stickyClassAfter ? stickyClassToggle(navbar, 'after') : '';
          datasClassAfter.forEach((e) => stickyClassToggle(e, 'after'));
        };

        if (navbar.dataset.path) {
          const path = navbar.dataset.path.split(' ');
          const url = new URL(document.location.href);
          let isUrlValid = false;

          path.forEach((p) => {
            if (url.pathname === `/${p}`) {
              isUrlValid = true;
              window.addEventListener('scroll', () => {
                stickyPerso();
              });
            }
          });

          if (!isUrlValid) {
            navbar.classList.add('sticky-active');
            classToStickyAction('sticky');
          }
        } else {
          window.addEventListener('scroll', () => {
            stickyPerso();
          });
        }
      }
      // TYPE 1

      // TYPE 2
      if (navbar.dataset.stickyTop) {
        let isSticky = false;

        window.addEventListener('scroll', () => {
          if (window.scrollY > navbar.dataset.stickyTop && isSticky === false) {
            navbar.classList.add('sticky');

            if (navbar.dataset.stickyAnimation) {
              navbar.classList.add(navbar.dataset.stickyAnimation);
              setTimeout(() => {
                navbar.classList.remove(navbar.dataset.stickyAnimation);
              }, 500);
            }

            classToStickyAction('sticky');
            isSticky = true;
          }

          if (window.scrollY < navbar.dataset.stickyTop && isSticky === true) {
            if (navbar.dataset.stickyAnimation) {
              navbar.classList.add(navbar.dataset.stickyAnimation);
              setTimeout(() => {
                navbar.classList.remove(navbar.dataset.stickyAnimation);
              }, 500);
            }

            navbar.classList.remove('sticky');
            classToStickyAction('top');

            isSticky = false;
          }
        });
      }
      // TYPE 2
    }
  }

  render() {
    this.navToggles.forEach((navToggle) => {
      this.navbarToggle(document.querySelectorAll(navToggle));
    });

    this.navbarSticky(this.nav);
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const navbar = new Navbar();

export default Navbar;
