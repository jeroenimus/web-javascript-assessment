class HallController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  init() {
    this.#model.bindTruckAdded(this.onTruckAdded);
    this.#model.bindConveyorAdded(this.onConveyorAdded);
    this.#model.bindBoxAdded(this.onBoxAdded);

    this.#view.bindDropBox(this.handleDropBox);
  }

  onTruckAdded = (id, length, width, interval) => {
    this.#view.showTruck(id, length, width, interval);
  }

  onConveyorAdded = (id) => {
    this.#view.showConveyor(id);
  }

  onBoxAdded = (boxId, boxWidth, boxHeight, boxColour, boxMatrix, conveyorId) => {
    this.#view.showBox(boxId, boxWidth, boxHeight, boxColour, boxMatrix, conveyorId);
  }

  handleDropBox = async (boxId, truckId, row, column) => {
    const result = await this.#model.isInsideTruck(boxId, truckId, row, column);
    return result;
  }
}

export { HallController };
