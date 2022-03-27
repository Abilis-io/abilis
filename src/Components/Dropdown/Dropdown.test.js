import { getByTestId } from '@testing-library/dom';

import DropdownRender from './DropdownRender';
import Dropdown from './Dropdown';

beforeEach(() => {
  document.body.innerHTML = DropdownRender.render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Dropdown Integration Test', () => {
  it('should be open the dropdown menu when we click on the dropdown button', () => {
    const alert = new Dropdown();
    const dropdownButton = getByTestId(document.body, 'dropdownButton');
    const dropdownMenu = getByTestId(document.body, 'dropdownMenu');

    dropdownButton.click();

    expect(dropdownMenu.classList.contains('active')).toBe(true);
  });
});
