/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array containing elements to check.
 * @returns {boolean} True if all elements in the array exist in the set, false otherwise.
 */
export default function hasValuesFromArray(Set, array) {
  return array.every((element) => Set.has(element));
}
