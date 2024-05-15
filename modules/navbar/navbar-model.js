class NavbarModel {
  #selectedHall;
  #onHallChanged;

  constructor() {
    if (sessionStorage.getItem('selectedHall') === null) { sessionStorage.setItem('selectedHall', 1); }
    
    this.#selectedHall = +sessionStorage.getItem('selectedHall');
  }

  getSelectedHall() {
    return this.#selectedHall;
  }

  setSelectedHall(id) {
    this.#selectedHall = id;
    this.#onHallChanged(id);

    sessionStorage.setItem('selectedHall', id)
  }

  bindHallChanged(callback) {
    this.#onHallChanged = callback;
  }
}

export { NavbarModel };
