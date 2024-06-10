class HallController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  init() {
    this.#model.bindTruckAdded(this.onTruckAdded);

    this.#view.init();
    this.#view.bindDropBox(this.handleDropBox);
  }

  onTruckAdded = (id, length, width, interval) => {
    this.#view.showTruck(id, length, width, interval);
  }

  async handleDropBox(handler) {
    return 1;
  }
}

export { HallController };
