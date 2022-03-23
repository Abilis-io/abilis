import { getByTestId } from '@testing-library/dom';

import NavbarRender from './NavbarRender';
import Navbar from './Navbar';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Navbar Integration Test', () => {
  it('should data class before be added when scollY == 0', () => {
    document.body.innerHTML = NavbarRender.simple();
    const navbar = new Navbar();
    const nav = getByTestId(document.body, 'navbar');
    const scrollTarget = getByTestId(document.body, 'scrollTarget');

    expect(nav.classList.contains(nav.dataset.stickyClassBefore)).toBe(true);

    global.window.scrollTo(0, 1000);

    console.log(global.window.scrollY);
    // console.log(document.body.innerHTML);

  });
});
