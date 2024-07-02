/**
 * Returns a Map of groceries with specified items and quantities.
 * @returns {Map} A Map containing groceries with items as keys and quantities as values.
 */
export default function groceriesList() {
  const grocery = new Map();

  grocery.set('Apples', 10);
  grocery.set('Tomatoes', 10);
  grocery.set('Pasta', 1);
  grocery.set('Rice', 1);
  grocery.set('Banana', 5);

  return grocery;
}
