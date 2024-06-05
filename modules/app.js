import { NavbarController, NavbarModel, NavbarView } from './navbar.js';
import { AddTruckController, AddTruckModel, AddTruckView } from './add-truck.js';
import { ChangeWeatherController, ChangeWeatherModel, ChangeWeatherView } from './change-weather.js';

class App {
  #navbarController;
  #addTruckController;
  #changeWeatherController;

  constructor() {
    this.#navbarController = new NavbarController(new NavbarModel(), new NavbarView());
    this.#addTruckController = new AddTruckController(new AddTruckModel(), new AddTruckView());
    this.#changeWeatherController = new ChangeWeatherController(new ChangeWeatherModel(), new ChangeWeatherView());
  }

  run() {
    this.#navbarController.init();
    this.#addTruckController.init();
    this.#changeWeatherController.init();
  }
}

export { App };
