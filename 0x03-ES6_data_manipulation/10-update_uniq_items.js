/**
 * Updates the quantity of items in a map where the initial quantity is 1 to 100.
 * @param {Map} map - The map containing items and their quantities.
 * @throws {Error} If the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (typeof map !== 'object') {
    throw Error('Cannot process');
  } else {
    for (const [key, val] of map) {
      if (val === 1) {
        map.set(key, 100);
      }
    }
  }
  return map;
}
