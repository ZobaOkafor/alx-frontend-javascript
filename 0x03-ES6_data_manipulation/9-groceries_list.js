/**
 * Returns a Map of groceries with specified items and quantities.
 * @returns {Map} A Map containing groceries with items as keys and quantities as values.
 */
export default function groceriesList() {
  const groceries = new Map();

  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
