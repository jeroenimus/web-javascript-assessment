import { createBox } from '../box/box-factory.js';

class ConveyorModel {
  #id;
  #onBoxCreated;

  constructor(id) {
    this.#id = id;
  }

  createBoxes() {
    setInterval(() => {
      const box = createBox();
      this.#onBoxCreated(box, this.#id);
    }, 5000);
  }

  getId() {
    return this.#id;
  }

  bindBoxCreated(callback) {
    this.#onBoxCreated = callback;
  }
}

export { ConveyorModel };
