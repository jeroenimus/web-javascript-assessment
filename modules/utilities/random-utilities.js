/**
 * Creates a random truck id.
 * @returns {string}
 */
export function getRandomTruckId() {
  return 'truck-' + self.crypto.randomUUID();
}
/**
 * Creates a random package id.
 * @returns {string}
 */
export function getRandomBoxId() {
  return 'box-' + self.crypto.randomUUID();
}
