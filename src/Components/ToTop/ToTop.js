/* eslint-disable class-methods-use-this */
class ToTop {
  constructor() {
    this.run();
  }

  render() {
    const btn = document.querySelector('#to-top');

    if (btn) {
      window.addEventListener('scroll', () => {
        // eslint-disable-next-line radix
        if (window.scrollY > parseInt(btn.dataset.top)) {
          btn.classList.add('show');
        } else {
          btn.classList.remove('show');
        }
      });
      btn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const toTop = new ToTop();

export default ToTop;
