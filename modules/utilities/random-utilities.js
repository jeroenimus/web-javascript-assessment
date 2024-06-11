/**
 * Creates a random truck id.
 * @returns {string}
 */
export function createTruckId() {
  return 'truck-' + self.crypto.randomUUID();
}

/**
 * Creates a random conveyor id.
 * @returns {string}
 */
export function createConveyorId() {
  return 'conveyor-' + self.crypto.randomUUID();
}

/**
 * Creates a random package id.
 * @returns {string}
 */
export function createBoxId() {
  return 'box-' + self.crypto.randomUUID();
}

/**
 * Creates a random number.
 * @param {number} max - The largest number that can be returned (exclusive).
 * @returns {number}
 */
export function createRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
