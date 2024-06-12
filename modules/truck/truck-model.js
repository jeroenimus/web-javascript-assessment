class TruckModel {
  #id;
  #length;
  #width;
  #interval;
  #type;
  #matrix;

  constructor(id, length, width, interval, type) {
    this.#id = id;
    this.#length = length;
    this.#width = width;
    this.#interval = interval;
    this.#type = type;
    this.#matrix = this.#createMatrix(length, width);
  }

  getId() { return this.#id; }

  getLength() { return this.#length; }

  getWidth() { return this.#width; }

  getInterval() { return this.#interval; }

  getType() { return this.#type; }

  getMatrix() { return this.#matrix; }

  #createMatrix(length, width) {
    let array = [];

    for(let i = 0; i < length; ++i) {
      let rows = [];

      for (let j = 0; j < width; ++j) {
        rows.push(0);
      }

      array.push(rows);
    }

    return array;
  }
}

export { TruckModel };
