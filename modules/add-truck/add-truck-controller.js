import { TruckModel } from '../truck/truck-model.js';
import { createTruckId } from '../utilities/random-utilities.js';

class AddTruckController {
  #model;
  #view;
  
  #hall1;
  #hall2;

  constructor(model, view, hall1, hall2) {
    this.#model = model;
    this.#view = view;
    this.#hall1 = hall1;
    this.#hall2 = hall2;
  }

  init() {
    this.#model.bindStepChanged(this.onStepChanged);

    this.#view.bindShowModal(this.handleShowModal);
    this.#view.bindPreviousStep(this.handlePreviousStep);
    this.#view.bindNextStep(this.handleNextStep);
    this.#view.bindCreateTruck(this.handleCreateTruck);
  }

  onStepChanged = (number) => {
    this.#view.showStep(number);
  }

  handleShowModal = () => {
    this.#model.setActiveStep(0);
  }

  handlePreviousStep = () => {
    const currentStep = this.#model.getActiveStep();
    if (currentStep === 0) { return; }

    this.#model.setActiveStep(currentStep - 1);
  }

  handleNextStep = () => {
    const currentStep = this.#model.getActiveStep();
    this.#model.setActiveStep(currentStep + 1);
  }

  handleCreateTruck = (length, width, interval, type) => {
    const id = createTruckId();
    const truck = new TruckModel(id, length, width, interval, type);

    const currentHall = sessionStorage.getItem('activeHall');

    if (currentHall === 'hall-1') {
      this.#hall1.addTruck(truck);
    }
    else {
      this.#hall2.addTruck(truck);
    }
  }
}

export { AddTruckController };
