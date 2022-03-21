import { getByTestId } from '@testing-library/dom';

import AlertRender from './AlertRender';

beforeEach(() => {
  document.body.innerHTML = AlertRender.render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Alert Integration Test', () => {
  it('should be close the alert', () => {
    require('./Alert');
    const closeBtn = getByTestId(document.body, 'closeBtn');

    closeBtn.click();
    const alert = document.querySelector('[data-testid="alert"]');
    expect(alert).toBe(null);
  });
});
