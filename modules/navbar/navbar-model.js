class NavbarModel {
  #activeTab;
  #activeHall;
  #onTabChanged;
  #onHallChanged;

  constructor() {
    this.#activeTab = '';
    this.#activeHall = '';
  }

  getActiveTab() {
    return this.#activeTab;
  }

  setActiveTab(id) {
    this.#activeTab = id;
    this.#onTabChanged(id);

    sessionStorage.setItem('activeTab', id);
  }

  getActiveHall() {
    return this.#activeHall;
  }

  setActiveHall(id) {
    this.#activeHall = id;
    this.#onHallChanged(id);

    sessionStorage.setItem('activeHall', id)
  }

  bindTabChanged(callback) {
    this.#onTabChanged = callback;
  }

  bindHallChanged(callback) {
    this.#onHallChanged = callback;
  }
}

export { NavbarModel };
