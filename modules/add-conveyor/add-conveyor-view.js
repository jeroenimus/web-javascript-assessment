class AddConveyorView {
  #addButton;

  constructor() {
    this.#addButton = document.getElementById('add-conveyor-button');
  }

  bindCreateConveyor(handler) {
    this.#addButton.addEventListener('click', () => {
      handler();
    });
  }
}

export { AddConveyorView };
