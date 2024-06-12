class HallModel {
  #trucks;
  #conveyors;
  #boxes;

  #onTruckAdded;
  #onConveyorAdded;
  #onBoxAdded;

  constructor() {
    this.#trucks = [];
    this.#conveyors = [];
    this.#boxes = [];
  }

  addTruck(truck) {
    if (this.#trucks.length === 3) { return; }

    this.#trucks.push(truck);
    this.#onTruckAdded(truck.getId(), truck.getLength(), truck.getWidth(), truck.getInterval());
  }

  addConveyor(conveyor) {
    if (this.#conveyors.length === 3) { return; }

    conveyor.bindBoxCreated(this.onBoxCreated);
    conveyor.createBoxes();

    this.#conveyors.push(conveyor);
    this.#onConveyorAdded(conveyor.getId());
  }

  addBox(box, conveyorId) {
    this.#boxes.push(box);
    this.#onBoxAdded(box.getId(), box.getWidth(), box.getHeight(), box.getColour(), box.getMatrix(), conveyorId);
  }

  async isInsideTruck(boxId, truckId, row, column) {
    const box = this.#boxes.find(item => item.getId() === boxId);
    const truck = this.#trucks.find(item => item.getId() === truckId);

    if (box.getWidth() + column > truck.getWidth()) { return false; }
    if (box.getHeight() + row > truck.getLength()) { return false; }

    return true;
  }

  onBoxCreated = (box, conveyorId) => {
    this.addBox(box, conveyorId);
  }

  bindTruckAdded(callback) {
    this.#onTruckAdded = callback;
  }

  bindConveyorAdded(callback) {
    this.#onConveyorAdded = callback;
  }

  bindBoxAdded(callback) {
    this.#onBoxAdded = callback;
  }
}

export { HallModel };
