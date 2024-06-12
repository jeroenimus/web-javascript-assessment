import { createBox } from '../box/box-factory.js';
import { createRandomNumberBetween } from '../utilities/random-utilities.js';

class ConveyorModel {
  #id;
  #onBoxCreated;

  constructor(id) {
    this.#id = id;
  }

  createBoxes() {
    const random = createRandomNumberBetween(10, 31);

    setInterval(() => {
      const box = createBox();
      this.#onBoxCreated(box, this.#id);
    }, random * 1000);
  }

  getId() {
    return this.#id;
  }

  bindBoxCreated(callback) {
    this.#onBoxCreated = callback;
  }
}

export { ConveyorModel };
