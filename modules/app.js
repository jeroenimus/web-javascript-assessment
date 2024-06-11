import { NavbarController, NavbarModel, NavbarView } from './navbar.js';
import { AddTruckController, AddTruckModel, AddTruckView } from './add-truck.js';
import { AddConveyorController, AddConveyorView } from './add-conveyor.js';
import { ChangeWeatherController, ChangeWeatherModel, ChangeWeatherView } from './change-weather.js';
import { HallController, HallModel, HallView } from './hall.js';

class App {
  #hallModel1;
  #hallModel2;

  #navbarController;
  #addTruckController;
  #addConveyorController;
  #changeWeatherController;
  #hallController1;
  #hallController2;

  constructor() {
    this.#hallModel1 = new HallModel();
    this.#hallModel2 = new HallModel();

    this.#navbarController = new NavbarController(new NavbarModel(), new NavbarView());
    this.#addTruckController = new AddTruckController(new AddTruckModel(), new AddTruckView(), this.#hallModel1, this.#hallModel2);
    this.#addConveyorController = new AddConveyorController(new AddConveyorView(), this.#hallModel1, this.#hallModel2);
    this.#changeWeatherController = new ChangeWeatherController(new ChangeWeatherModel(), new ChangeWeatherView());
    this.#hallController1 = new HallController(this.#hallModel1, new HallView('hall-1'));
    this.#hallController2 = new HallController(this.#hallModel2, new HallView('hall-2'));
  }

  run() {
    this.#navbarController.init();
    this.#addTruckController.init();
    this.#addConveyorController.init();
    this.#changeWeatherController.init();
    this.#hallController1.init();
    this.#hallController2.init();
  }
}

export { App };
