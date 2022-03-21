import { getByTestId } from '@testing-library/dom';

import AlertRender from './AlertRender';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Alert Integration Test', () => {
  it('should be close the alert', () => {
    document.body.innerHTML = AlertRender.render();
    require('./Alert');
    const closeBtn = getByTestId(document.body, 'closeBtn');

    closeBtn.click();
    const alert = document.querySelector('[data-testid="alert"]');
    expect(alert).toBe(null);
  });
});
