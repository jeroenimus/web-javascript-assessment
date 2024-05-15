class NavbarController {
  #navbar;
  #view;

  constructor(model, view) {
    this.#navbar = model;
    this.#view = view;
  }

  initialize() {
    this.#navbar.bindHallChanged(this.onHallChanged);

    this.#view.initialize();
    this.#view.bindChangeHall(this.handleChangeHall);

    this.onHallChanged(this.#navbar.getSelectedHall());
  }

  onHallChanged = (id) => {
    this.#view.switchTab(id);
    this.#view.showHall(id);
  }

  handleChangeHall = (id) => {
    const isCurrentHall = this.#navbar.getSelectedHall() === id;
    if (isCurrentHall) { return; }
    
    this.#navbar.setSelectedHall(id);
  }
}

export { NavbarController };
