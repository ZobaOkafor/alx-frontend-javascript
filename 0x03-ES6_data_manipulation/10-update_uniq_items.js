/**
 * Updates the quantity of items in a map where the initial quantity is 1 to 100.
 * @param {Map} map - The map containing items and their quantities.
 * @throws {Error} If the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
