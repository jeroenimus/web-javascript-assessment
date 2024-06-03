/**
 * Check if a value is between a minimum and maximum.
 * @param {string} value - The value to check.
 * @param {number} min - The smallest number the value can be.
 * @param {number} max - The largest number the value can be.
 * @returns {boolean}
 */
export function isBetween(value, min, max) {
  return value.trim() >= min && value.trim() <= max;
}

/**
 * Check if a value is empty.
 * @param {string} value - The value to check.
 * @returns {boolean}
 */
export function isEmpty(value) {
  if (value.trim() === '') { return true; }
  return false;
}

/**
 * Check if a value is not negative.
 * @param {string} value - The value to check.
 * @returns {boolean}
 */
export function isNegative(value) {
  if (value.trim() < 0) { return true; }
  return false;
}
