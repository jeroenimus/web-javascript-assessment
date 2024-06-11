import { BoxModel } from './box-model.js';
import { createBoxId, createRandomNumber } from '../utilities/random-utilities.js';

export function createBox() {
  const random = createRandomNumber(7);

  switch (random) {
    case 0:
      return createBoxO();
    case 1:
      return createBoxI();
    case 2:
      return createBoxT();
    case 3:
      return createBoxJ();
    case 4:
      return createBoxL();
    case 5:
      return createBoxS();
    case 6:
      return createBoxZ();
  }
}

function createBoxO() {
  const id = createBoxId();
  const width = 2;
  const height = 2;
  const colour = 'yellow';
  const matrix = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  return new BoxModel(id, width, height, colour, matrix);
}

function createBoxI() {
  const id = createBoxId();
  const width = 4;
  const height = 1;
  const colour = 'cyan';
  const matrix = [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  return new BoxModel(id, width, height, colour, matrix);
}

function createBoxT() {
  const id = createBoxId();
  const width = 3;
  const height = 2;
  const colour = 'purple';
  const matrix = [
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  return new BoxModel(id, width, height, colour, matrix);
}

function createBoxJ() {
  const id = createBoxId();
  const width = 2;
  const height = 3;
  const colour = 'blue';
  const matrix = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
  ]

  return new BoxModel(id, width, height, colour, matrix);
}

function createBoxL() {
  const id = createBoxId();
  const width = 2;
  const height = 3;
  const colour = 'orange';
  const matrix = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
  ]

  return new BoxModel(id, width, height, colour, matrix);
}

function createBoxS() {
  const id = createBoxId();
  const width = 3;
  const height = 2;
  const colour = 'green';
  const matrix = [
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  return new BoxModel(id, width, height, colour, matrix);
}

function createBoxZ() {
  const id = createBoxId();
  const width = 3;
  const height = 2;
  const colour = 'red';
  const matrix = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]

  return new BoxModel(id, width, height, colour, matrix);
}
