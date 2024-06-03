class AddTruckModel {
  #activeStep;
  #onStepChanged;

  constructor() {
    this.#activeStep = 0;
  }

  getActiveStep() {
    return this.#activeStep;
  }

  setActiveStep(number) {
    this.#activeStep = number;
    this.#onStepChanged(number);
  }

  bindStepChanged(callback) {
    this.#onStepChanged = callback;
  }
}

export { AddTruckModel };
