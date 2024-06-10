import { createTable } from '../utilities/view-utilities.js';

class HallView {
  #hall;

  constructor(id) {
    this.#hall = document.getElementById(id);
  }

  init() {
    // remove?
  }

  showTruck(id, length, width, interval) {
    const dock = this.#hall.querySelector('.is-dock:empty');
    const truck = createTable(id, length, width);

    setTimeout(() => {
      dock.append(truck);
    }, interval * 1000);
  }

  bindDropBox(handler) {
    this.#hall.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) { return; }

      const isBox = event.target.className === 'is-box';
      if (!isBox) { return; }

      event.preventDefault();

      const box = event.target;
      box.classList.add('is-grabbed');
      box.style.position = 'absolute';
      box.setPointerCapture(event.pointerId);

      const onPointerMove = (event) => {
        box.style.left = (box.offsetLeft + event.movementX) + 'px';
        box.style.top = (box.offsetTop + event.movementY) + 'px';
      }

      const onPointerUp = (event) => { // event needed?
        const boxLeft = box.getBoundingClientRect().left;
        const boxTop = box.getBoundingClientRect().top;

        box.classList.add('is-hidden');

        const dropTarget = document.elementFromPoint(boxLeft, boxTop);

        box.classList.remove('is-hidden');

        if (dropTarget !== null && dropTarget.tagName === 'TD') {
          box.style.left = null;
          box.style.top = null;

          dropTarget.append(box)
        }
        else {
          if (box.parentElement.tagName === 'TD') {
            box.style.left = null;
            box.style.top = null;
          }
          else {
            box.removeAttribute('style');
          }
        }

        box.classList.remove('is-grabbed');
        box.removeEventListener('pointermove', onPointerMove);
        box.removeEventListener('pointerup', onPointerUp);
      }

      box.addEventListener('pointermove', onPointerMove);
      box.addEventListener('pointerup', onPointerUp);
    });
  }
}

export { HallView };
