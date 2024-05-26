class NavbarModel {
  #activeTab;
  #activeHall;
  #onTabChanged;
  #onHallChanged;

  constructor() {
    if (sessionStorage.getItem('activeTab') === null) {
      sessionStorage.setItem('activeTab', 'tab-1');
    }

    if (sessionStorage.getItem('activeHall') === null) {
      sessionStorage.setItem('activeHall', 'hall-1');
    }
    
    this.#activeTab = sessionStorage.getItem('activeTab');
    this.#activeHall = sessionStorage.getItem('activeHall');
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
