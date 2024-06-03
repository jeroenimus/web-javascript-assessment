class NavbarController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  init() {
    this.#model.bindTabChanged(this.onTabChanged);
    this.#model.bindHallChanged(this.onHallChanged);

    this.#view.init();
    this.#view.bindSwitchTab(this.handleSwitchTab);

    this.onTabChanged(this.#model.getActiveTab());
    this.onHallChanged(this.#model.getActiveHall());
  }

  onTabChanged = (id) => {
    this.#view.showActiveTab(id);
  }

  onHallChanged = (id) => {
    this.#view.showActiveHall(id);
  }

  handleSwitchTab = (id) => {
    const isCurrentTab = this.#model.getActiveTab() === id;
    if (isCurrentTab) { return; }
    
    this.#model.setActiveTab(id);
    this.#model.setActiveHall('hall-' + id.at(-1));
  }
}

export { NavbarController };
