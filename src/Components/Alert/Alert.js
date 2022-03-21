import Close from '../Close/Close';

class Alert {
  constructor() {
    this.run();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // eslint-disable-next-line no-unused-vars
    const closeAlert = new Close('.alert');
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const alert = new Alert();

export default Alert;
