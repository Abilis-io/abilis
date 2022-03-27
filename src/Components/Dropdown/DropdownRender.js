/* eslint-disable arrow-body-style */
const DropdownRender = {
  render: () => {
    return `
    <div class="center-flex">
      <div class="dropdown dropdown-click">
        <a class="button button-outline-gray-8" data-testid="dropdownButton">
          More
        </a>
        <ul class="dropdown-menu box-shadow-3" data-testid="dropdownMenu">
          <li class="dropdown-item">
            <a>About</a>
          </li>
          <li class="dropdown-item">
            <a>Jobs</a>
          </li>
          <li class="dropdown-item">
            <a>Contact</a>
          </li>
          <hr class="dropdown-divider">
          <li class="dropdown-item">
            <a>Report an issue</a>
          </li>
        </ul>
      </div>
    </div>
    `;
  },
};

export default DropdownRender;
