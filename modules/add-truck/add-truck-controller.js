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
    this.#view.bindAddTruck(this.handleAddTruck);
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

  handleAddTruck = (length, width, interval, type) => {
    const currentHall = sessionStorage.getItem('activeHall');

    if (currentHall === 'hall-1') {
      this.#hall1.addTruck(length, width, interval, type);
    }
    else {
      this.#hall2.addTruck(length, width, interval, type);
    }
  }
}

export { AddTruckController };
