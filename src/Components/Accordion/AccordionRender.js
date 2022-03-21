/* eslint-disable arrow-body-style */
const AccordionRender = {
  render: () => {
    return `
      <div class="accordion single">
      
        <div class="accordion-item" data-testid="accordionSingleItem1">
          <button class="accordion-toggle" type="button" data-testid="btnAccordionSingle1">
            Accordion Single Item 1
          </button>
          <div class="accordion-content">
            <div class="accordion-body">
              Lorem ipsum
            </div>
          </div>
        </div>
      
        <div class="accordion-item active" data-testid="accordionSingleItem2">
          <button class="accordion-toggle" type="button" data-testid="btnAccordionSingle2">
            Accordion Single Item 2
          </button>
          <div class="accordion-content">
            <div class="accordion-body">
              Lorem ipsum
            </div>
          </div>
        </div>
      
      </div>

      <div class="accordion multiple">
      
        <div class="accordion-item" data-testid="accordionMultipleItem1">
          <button class="accordion-toggle" type="button" data-testid="btnAccordionMultiple1">
            Accordion Single Item 1
          </button>
          <div class="accordion-content">
            <div class="accordion-body">
              Lorem ipsum
            </div>
          </div>
        </div>
      
        <div class="accordion-item active" data-testid="accordionMultipleItem2">
          <button class="accordion-toggle" type="button" data-testid="btnAccordionMultiple2">
            Accordion Single Item 2
          </button>
          <div class="accordion-content">
            <div class="accordion-body">
              Lorem ipsum
            </div>
          </div>
        </div>
      
      </div>
    `;
  },
};

export default AccordionRender;
