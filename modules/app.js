import { NavbarController, NavbarModel, NavbarView } from './navbar.js';
import { AddTruckController, AddTruckModel, AddTruckView } from './add-truck.js';

class App {
  #navbarController;
  #addTruckController;

  constructor() {
    this.#navbarController = new NavbarController(new NavbarModel(), new NavbarView());
    this.#addTruckController = new AddTruckController(new AddTruckModel(), new AddTruckView());
  }

  run() {
    this.#navbarController.initialize();
    this.#addTruckController.initialize();
  }
}

export { App };
