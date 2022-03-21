/* eslint-disable arrow-body-style */
const AlertRender = {
  render: () => {
    return `
    <div class="alert" data-testid="alert">
      <div class="alert-header">
        <p>Hello World</p>
        <button data-testid="closeBtn" class="close" data-close></button>
      </div>
      <div class="alert-body">
        Lorem ipsum dolor sit
      </div>
    </div>
    `;
  },
};

export default AlertRender;
