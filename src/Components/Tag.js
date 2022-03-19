/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Close from './Close';

class Tag {
  constructor() {
    this.run();
  }

  render() {
    const closeTag = new Close('.tag');
    const closeTags = new Close('.tags');
  }

  run() {
    this.render();
  }
}

const tag = new Tag();

export default Tag;
