class AddConveyorController {
  #view;

  #hall1;
  #hall2;

  constructor(view, hall1, hall2) {
    this.#view = view;
    this.#hall1 = hall1;
    this.#hall2 = hall2;
  }

  init() {
    this.#view.bindAddConveyor(this.handleAddConveyor);
  }

  handleAddConveyor = () => {
    const currentHall = sessionStorage.getItem('activeHall');

    if (currentHall === 'hall-1') {
      this.#hall1.addConveyor();
    }
    else {
      this.#hall2.addConveyor();
    }
  }
}

export { AddConveyorController };
