import { TruckModel } from './truck-model.js';
import { getRandomTruckId } from '../utilities/random-utilities.js'

class HallModel {
  #trucks;
  #onTruckAdded;

  constructor() {
    this.#trucks = [];
  }

  addTruck(length, width, interval, type) {
    if (this.#trucks.length === 3) { return; }
    
    const id = getRandomTruckId();
    const truck = new TruckModel(id, length, width, interval, type);

    this.#trucks.push(truck);
    this.#onTruckAdded(id, length, width, interval);
  }

  bindTruckAdded(callback) {
    this.#onTruckAdded = callback;
  }
}

export { HallModel };
