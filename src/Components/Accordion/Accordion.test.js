import { getByTestId } from '@testing-library/dom';

import AccordionRender from './AccordionRender';
import Accordion from './Accordion';

beforeEach(() => {
  document.body.innerHTML = AccordionRender.render();
});

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Accordion Integration Test', () => {
  it('should add the active class to the target and remove it to the others', () => {
    const accordionSingleClass = document.querySelectorAll('.accordion.single');
    const accordionSingle = new Accordion(accordionSingleClass, 'single');

    const accordionSingleBtn1 = getByTestId(
      document.body,
      'btnAccordionSingle1'
    );
    const accordionSingleItem1 = getByTestId(
      document.body,
      'accordionSingleItem1'
    );
    const accordionSingleItem2 = getByTestId(
      document.body,
      'accordionSingleItem2'
    );

    expect(accordionSingleItem1.classList.contains('active')).toBe(false);
    expect(accordionSingleItem2.classList.contains('active')).toBe(true);
    accordionSingleBtn1.click();
    expect(accordionSingleItem1.classList.contains('active')).toBe(true);
    expect(accordionSingleItem2.classList.contains('active')).toBe(false);
  });

  it("should add the active class to the target and don't remove it to the others", () => {
    const accordionMultipleClass = document.querySelectorAll('.accordion.multiple');
    const accordionMultiple = new Accordion(accordionMultipleClass, 'multiple');

    const accordionMultipleBtn1 = getByTestId(
      document.body,
      'btnAccordionMultiple1'
    );
    const accordionMultipleItem1 = getByTestId(
      document.body,
      'accordionMultipleItem1'
    );
    const accordionMultipleItem2 = getByTestId(
      document.body,
      'accordionMultipleItem2'
    );
    
    expect(accordionMultipleItem1.classList.contains('active')).toBe(false);
    expect(accordionMultipleItem2.classList.contains('active')).toBe(true);
    accordionMultipleBtn1.click();
    expect(accordionMultipleItem1.classList.contains('active')).toBe(true);
    expect(accordionMultipleItem2.classList.contains('active')).toBe(true);
  });
});
