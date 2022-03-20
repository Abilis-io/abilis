class Loader {
  constructor() {
    this.run();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    window.addEventListener('load', () => {
      document.querySelector('body').classList.add('loaded');
    });
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const loader = new Loader();

export default Loader;
