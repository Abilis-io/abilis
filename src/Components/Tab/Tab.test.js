import { getByTestId } from '@testing-library/dom';

import TabRender from './TabRender';

beforeEach(() => {
  document.body.innerHTML = TabRender.render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Tab Integration Test', () => {
  it('should switch tab1 to tab2 when click on the tab2 title', () => {
    require('./Tab');
    const tab1 = getByTestId(document.body, 'tab1');
    const tab2 = getByTestId(document.body, 'tab2');
    const tab3 = getByTestId(document.body, 'tab3');
    const tabContent1 = getByTestId(document.body, 'tabContent1');
    const tabContent2 = getByTestId(document.body, 'tabContent2');
    const tabContent3 = getByTestId(document.body, 'tabContent3');

    expect(tab1.classList.contains('active')).toBe(true);
    expect(tabContent1.classList.contains('active')).toBe(true);
    expect(tab2.classList.contains('active')).toBe(false);
    expect(tabContent2.classList.contains('active')).toBe(false);
    expect(tab3.classList.contains('active')).toBe(false);
    expect(tabContent3.classList.contains('active')).toBe(false);

    expect(tab1.classList.contains(tab1.dataset.active)).toBe(true);

    tab2.click();
    
    expect(tab1.classList.contains('active')).toBe(false);
    expect(tabContent1.classList.contains('active')).toBe(false);
    expect(tab2.classList.contains('active')).toBe(true);
    expect(tabContent2.classList.contains('active')).toBe(true);
    expect(tab3.classList.contains('active')).toBe(false);
    expect(tabContent3.classList.contains('active')).toBe(false);

    expect(tab2.classList.contains(tab2.dataset.active)).toBe(true);
  });
});
