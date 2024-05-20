class NavbarController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  initialize() {
    this.#model.bindHallChanged(this.onHallChanged);

    this.#view.initialize();
    this.#view.bindChangeHall(this.handleChangeHall);

    this.onHallChanged(this.#model.getSelectedHall());
  }

  onHallChanged = (id) => {
    this.#view.switchTab(id);
    this.#view.showHall(id);
  }

  handleChangeHall = (id) => {
    const isCurrentHall = this.#model.getSelectedHall() === id;
    if (isCurrentHall) { return; }
    
    this.#model.setSelectedHall(id);
  }
}

export { NavbarController };
