class AddConveyorView {
  #addButton;

  constructor() {
    this.#addButton = document.getElementById('add-conveyor-button');
  }

  bindAddConveyor(handler) {
    this.#addButton.addEventListener('click', () => {
      handler();
    });
  }
}

export { AddConveyorView };
