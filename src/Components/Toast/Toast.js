/* eslint-disable class-methods-use-this */
class Toast {
  constructor() {
    this.run();
  }

  render() {
    const button = document.querySelectorAll('.button-toast');

    button.forEach((btn) => {
      const toast = document.querySelector(btn.dataset.target);
      const close = toast.querySelector('.close');
      const progress = toast.querySelector('.toast-progress');

      btn.addEventListener('click', () => {
        toast.classList.add('active');
        progress.classList.add('active');

        // eslint-disable-next-line max-len
        const time = 5000; // 5s -> utils/variables/_toast.scss -> $toast-progress-animation-duration

        setTimeout(() => {
          toast.classList.remove('active');
        }, time);

        setTimeout(() => {
          progress.classList.remove('active');
        }, time + 300);
      });

      close.addEventListener('click', () => {
        toast.classList.remove('active');

        setTimeout(() => {
          progress.classList.remove('active');
        }, 300);
      });
    });
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const toast = new Toast();

export default Toast;
