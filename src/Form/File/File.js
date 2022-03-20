class File {
  constructor() {
    this.run();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const files = document.querySelectorAll('.file');

    files.forEach((file) => {
      const fileInput = file.querySelector('input[type=file]');
      const fileName = file.querySelector('.file-name');

      if (fileName != null) {
        fileInput.addEventListener('change', () => {
          if (fileInput.files.length > 0) {
            fileName.textContent = fileInput.files[0].name;
          }
        });
      }
    });
  }

  run() {
    this.render();
  }
}

// eslint-disable-next-line no-unused-vars
const file = new File();

export default File;
