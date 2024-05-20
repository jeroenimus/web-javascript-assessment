class NavbarView {
  #navbarMenu;
  #navbarBurger;

  constructor() {
    this.#navbarBurger = document.getElementById('navbar-burger');
    this.#navbarMenu = document.getElementById('navbar-menu');
  }

  initialize() {
    this.#navbarBurger.addEventListener('click', this.#handleNavbarBurger);
  }

  switchTab(id) {
    const tabs = this.#navbarMenu.querySelectorAll('a[id^="tab-"]');

    for (let tab of tabs) {
      (+tab.id.at(-1) === id) ? tab.classList.add('is-active') : tab.classList.remove('is-active');
    }
  }

  showHall(id) {
    const halls = document.body.querySelectorAll('section[id^="hall-"]');

    for (let hall of halls) {
      (+hall.id.at(-1) === id) ? hall.classList.remove('is-hidden') : hall.classList.add('is-hidden');
    }
  }

  bindChangeHall(handler) {
    const tabs = this.#navbarMenu.querySelector('.navbar-start');
    
    tabs.addEventListener('click', (event) => {
      const isNavbarItem = event.target.classList.contains('navbar-item');
      if (!isNavbarItem) { return; }

      handler(+event.target.id.at(-1));
    });
  }

  #handleNavbarBurger = () => {
    this.#navbarBurger.classList.toggle('is-active');
    this.#navbarMenu.classList.toggle('is-active');

    const isExpanded = this.#navbarBurger.getAttribute('aria-expanded');
    this.#navbarBurger.setAttribute('aria-expanded', (isExpanded === 'false') ? 'true' : 'false');
  }
}

export { NavbarView };
