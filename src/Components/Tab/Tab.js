/* eslint-disable class-methods-use-this */
class Tab {
  constructor() {
    this.run();
  }

  render() {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach((e) => {
      const tabTitles = e.querySelectorAll('.tab .tab-title');

      let isActive = false;
      tabTitles.forEach((title) => {
        if (!isActive && title) {
          if (title.classList.contains('active')) {
            isActive = true;
          }
        }
      });

      if (!isActive && tabTitles[0]) {
        tabTitles[0].classList.add('active');
      }

      tabTitles.forEach((title) => {
        const activeClass = title.dataset.active;
        if (activeClass) {
          activeClass.split(' ').forEach((activeclass) => {
            if (title.classList.contains('active')) {
              title.classList.add(activeclass);
            }
          });
        }
      });

      tabTitles.forEach((title) => {
        const { target } = title.dataset;

        if (target && title) {
          const targetEl = e.querySelector(target);

          title.addEventListener('click', () => {
            const activeClass = title.dataset.active;

            title.classList.add('active');
            targetEl.classList.add('active');

            if (activeClass) {
              activeClass.split(' ').forEach((activeclass) => {
                title.classList.add(activeclass);
              });
            }

            tabTitles.forEach((tactive) => {
              if (tactive !== title) {
                if (tactive.classList.contains('active')) {
                  tactive.classList.remove('active');
                  e.querySelector(tactive.dataset.target).classList.remove(
                    'active'
                  );
                }

                const activeClassVerif = tactive.dataset.active;

                if (activeClassVerif) {
                  activeClassVerif.split(' ').forEach((activeclass) => {
                    if (!tactive.classList.contains('active')) {
                      tactive.classList.remove(activeclass);
                    }
                  });
                }
              }
            });
          });

          if (title && targetEl) {
            if (title.classList.contains('active')) {
              targetEl.classList.add('active');
            } else if (targetEl.classList.contains('active')) {
              targetEl.classList.remove('active');
            }
          }
        }
      });
    });
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const tab = new Tab();

export default Tab;
