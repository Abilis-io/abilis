class Accordion {
  constructor() {
    this.run();
  }

  // eslint-disable-next-line class-methods-use-this
  build(acc, type) {
    acc.forEach((accord) => {
      const items = accord.querySelectorAll('.accordion-item');

      items.forEach((item) => {
        const btn = item.querySelector('.accordion-toggle');
        const content = item.querySelector('.accordion-content');
        const { scrollHeight } = content;

        if (item.classList.contains('active')) {
          content.style.height = `${scrollHeight}px`;
        }

        btn.addEventListener('click', () => {
          if (type === 'single') {
            items.forEach((itemActive) => {
              if (itemActive.classList.contains('active') && itemActive !== item) {
                const contentActive = itemActive.querySelector('.accordion-content');
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

  render() {
    const accordionSingleClass = document.querySelectorAll('.accordion.single');
    this.build(accordionSingleClass, 'single');

    const accordionMultipleClass = document.querySelectorAll('.accordion.multiple');
    this.build(accordionMultipleClass, 'multiple');
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const accordion = new Accordion();

export default Accordion;
