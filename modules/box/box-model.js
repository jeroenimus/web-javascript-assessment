class BoxModel {
  #id;
  #width;
  #height;
  #colour;
  #matrix;

  constructor(id, width, height, colour, matrix) {
    this.#id = id;
    this.#width = width;
    this.#height = height;
    this.#colour = colour;
    this.#matrix = matrix;
  }

  getId() { return this.#id; }

  getWidth() { return this.#width; }

  getHeight() { return this.#height; }

  getColour() { return this.#colour; }

  getMatrix() { return this.#matrix; }
}

export { BoxModel };
