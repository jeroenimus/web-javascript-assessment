class TruckModel {
  #id;
  #length;
  #width;
  #interval;
  #type;

  constructor(id, length, width, interval, type) {
    this.#id = id;
    this.#length = length;
    this.#width = width;
    this.#interval = interval;
    this.#type = type;
  }

  getId() { return this.#id; }

  getLength() { return this.#length; }

  getWidth() { return this.#width; }

  getInterval() { return this.#interval; }

  getType() { return this.#type; }
}

export { TruckModel };
