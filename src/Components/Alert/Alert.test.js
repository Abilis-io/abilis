import { getByTestId } from '@testing-library/dom';

import AlertRender from './AlertRender';
import Alert from './Alert';

beforeEach(() => {
  document.body.innerHTML = AlertRender.render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Alert Integration Test', () => {
  it('should be close the alert', () => {
    const alert = new Alert();
    const closeBtn = getByTestId(document.body, 'closeBtn');

    closeBtn.click();
    const alertItem = document.querySelector('[data-testid="alert"]');
    expect(alertItem).toBe(null);
  });
});
