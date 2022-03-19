/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
class Lazyload {
  constructor() {
    this.run();
  }

  render() {
    const images = document.querySelectorAll('.lazyload');

    const loadImages = (imgs) => {
      imgs.forEach((img) => {
        const { src } = img.dataset;
        if (!src) return;
        img.src = src;
      });
    };

    if (!window.IntersectionObserver) {
      loadImages(images);
      return;
    }

    // Observer options.
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const { src } = entry.target.dataset;
        if (!src) return;
        entry.target.src = src;
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Start observe
    images.forEach((image) => {
      observer.observe(image);
    });
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const lazyload = new Lazyload();

export default Lazyload;
