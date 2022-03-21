import { getByTestId } from '@testing-library/dom';
import '@testing-library/jest-dom';

import AccordionRender from './AccordionRender';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Accordion Integration Test', () => {
  it('should be toggle the active class', () => {
    document.body.innerHTML = AccordionRender.render();
    require('./Accordion');
    const accordionSingleBtn1 = getByTestId(document.body, 'btnAccordionSingle1');
    const accordionSingleItem1 = getByTestId(document.body, 'accordionSingleItem1');
    const accordionSingleItem2 = getByTestId(document.body, 'accordionSingleItem2');

    const accordionMultipleBtn1 = getByTestId(document.body, 'btnAccordionMultiple1');
    const accordionMultipleItem1 = getByTestId(document.body, 'accordionMultipleItem1');
    const accordionMultipleItem2 = getByTestId(document.body, 'accordionMultipleItem2');

    expect(accordionSingleItem1.classList.contains('active')).toBe(false);
    expect(accordionSingleItem2.classList.contains('active')).toBe(true);
    accordionSingleBtn1.click();
    expect(accordionSingleItem1.classList.contains('active')).toBe(true);
    expect(accordionSingleItem2.classList.contains('active')).toBe(false);

    expect(accordionMultipleItem1.classList.contains('active')).toBe(false);
    expect(accordionMultipleItem2.classList.contains('active')).toBe(true);
    accordionMultipleBtn1.click();
    expect(accordionMultipleItem1.classList.contains('active')).toBe(true);
    expect(accordionMultipleItem2.classList.contains('active')).toBe(true);
  });
});
