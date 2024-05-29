class NavbarView {
  #burger;
  #menu;
  #main;

  constructor() {
    this.#burger = document.getElementById('navbar-burger');
    this.#menu = document.getElementById('navbar-menu');
    this.#main = document.getElementById('main');
  }

  initialize() {
    this.#burger.addEventListener('click', this.#handleToggleBurger);
  }

  showActiveTab(id) {
    const tabs = this.#menu.querySelectorAll('.navbar-start > .navbar-item');

    for (let tab of tabs) {
      if (tab.id === id) {
        tab.classList.add('is-active');
      }
      else {
        tab.classList.remove('is-active');
      }
    }
  }

  showActiveHall(id) {
    const halls = this.#main.querySelectorAll('section[id|=hall]');

    for (let hall of halls) {
      if (hall.id === id) {
        hall.classList.remove('is-hidden');
      }
      else {
        hall.classList.add('is-hidden');
      }
    }
  }

  bindSwitchTab(handler) {
    const tabs = this.#menu.querySelector('.navbar-start');
    
    tabs.addEventListener('click', (event) => {
      const isNavbarItem = event.target.classList.contains('navbar-item');
      if (!isNavbarItem) { return; }

      handler(event.target.id);
    });
  }

  #handleToggleBurger = () => {
    this.#burger.classList.toggle('is-active');
    this.#menu.classList.toggle('is-active');

    const isExpanded = this.#burger.ariaExpanded;
    this.#burger.ariaExpanded = (isExpanded === 'false') ? true : false;
  }
}

export { NavbarView };
