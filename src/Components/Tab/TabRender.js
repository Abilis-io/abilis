/* eslint-disable arrow-body-style */
const TabRender = {
  render: () => {
    return `
      <div class="tabs horizontal">
        <div class="tab">
          <div class="tab-title button" data-target="#tabContent1" data-active="button-primary" data-testid="tab1">Tab 1</div>
          <div class="tab-title button" data-target="#tabContent2" data-active="button-info" data-testid="tab2">Tab 2</div>
          <div class="tab-title button" data-target="#tabContent3" data-active="button-danger" data-testid="tab3">Tab 3</div>
        </div>
        
        <div class="tab-content">
          <div class="tab-item bg-primary br-8 p-20" id="tabContent1" data-testid="tabContent1">
            Lorem ipsum dolor sit
          </div>
          <div class="tab-item bg-info br-8 p-20" id="tabContent2" data-testid="tabContent2">
            Lorem ipsum dolor sit
          </div>
          <div class="tab-item bg-danger br-8 p-20" id="tabContent3" data-testid="tabContent3">
            Lorem ipsum dolor sit
          </div>
        </div>
      </div>
    `;
  },
};

export default TabRender;
