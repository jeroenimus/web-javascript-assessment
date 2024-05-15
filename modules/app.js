import { NavbarController, NavbarModel, NavbarView } from "./navbar.js";

class App {
  #navbarController;

  constructor() {
    this.#navbarController = new NavbarController(new NavbarModel(), new NavbarView());
  }

  run() {
    this.#navbarController.initialize();
  }
}

export { App };
