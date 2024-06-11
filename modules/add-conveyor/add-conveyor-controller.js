import { ConveyorModel } from '../conveyor/conveyor-model.js';
import { createConveyorId } from '../utilities/random-utilities.js';

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
    this.#view.bindCreateConveyor(this.handleCreateConveyor);
  }

  handleCreateConveyor = () => {
    const id = createConveyorId();
    const conveyor = new ConveyorModel(id);
    
    const currentHall = sessionStorage.getItem('activeHall');

    if (currentHall === 'hall-1') {
      this.#hall1.addConveyor(conveyor);
    }
    else {
      this.#hall2.addConveyor(conveyor);
    }
  }
}

export { AddConveyorController };
