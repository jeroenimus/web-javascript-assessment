class AddTruckController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  init() {
    this.#model.bindStepChanged(this.onStepChanged);

    this.#view.init();
    this.#view.bindReset(this.handleReset);
    this.#view.bindPreviousStep(this.handlePreviousStep);
    this.#view.bindNextStep(this.handleNextStep);
    this.#view.bindCreateTruck(this.handleCreateTruck);
  }

  onStepChanged = (number) => {
    this.#view.showStep(number);
  }

  handleReset = () => {
    this.#model.setActiveStep(0);
  }

  handlePreviousStep = () => {
    const current = this.#model.getActiveStep();
    if (current === 0) { return; }

    this.#model.setActiveStep(current - 1);
  }

  handleNextStep = () => {
    const current = this.#model.getActiveStep();
    
    this.#model.setActiveStep(current + 1);
  }

  handleCreateTruck = (length, width, interval, type) => {
    // TODO: add to active hall
    console.log('length: ' + length);
    console.log('width: ' + width);
    console.log('interval: ' + interval);
    console.log('type: ' + type);
  }
}

export { AddTruckController };
