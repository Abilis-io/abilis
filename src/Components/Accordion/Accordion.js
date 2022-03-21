class Accordion {
  constructor(acc, type) {
    this.acc = acc;
    this.type = type;

    this.run();
  }

  render() {
    this.acc.forEach((accord) => {
      const items = accord.querySelectorAll('.accordion-item');

      items.forEach((item) => {
        const btn = item.querySelector('.accordion-toggle');
        const content = item.querySelector('.accordion-content');
        const body = item.querySelector('.accordion-body');
        let scrollHeight = body.scrollHeight;

        window.addEventListener('resize', () => {
          scrollHeight = body.scrollHeight;
        });

        if (item.classList.contains('active')) {
          content.style.height = `${scrollHeight}px`;

          window.addEventListener('resize', () => {
            content.style.height = `${scrollHeight}px`;
          });
        }

        btn.addEventListener('click', () => {
          if (this.type === 'single') {
            items.forEach((itemActive) => {
              if (
                itemActive.classList.contains('active') &&
                itemActive !== item
              ) {
                const contentActive =
                  itemActive.querySelector('.accordion-content');
                contentActive.style.height = '0px';
                itemActive.classList.remove('active');
              }
            });
          }
          if (item.classList.contains('active')) {
            item.classList.remove('active');
            content.style.height = '0px';
          } else {
            item.classList.add('active');
            content.style.height = `${scrollHeight}px`;
          }
        });
      });
    });
  }

  run() {
    this.render();
  }
}

const accordionSingleClass = document.querySelectorAll('.accordion.single');
const accordionMultipleClass = document.querySelectorAll('.accordion.multiple');
const accordionSingle = new Accordion(accordionSingleClass, 'single');
const accordionMultiple = new Accordion(accordionMultipleClass, 'multiple');

export default Accordion;
