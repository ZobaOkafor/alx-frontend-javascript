/**
 * Queries an API endpoint and tracks the number of times it is called for each endpoint.
 * Throws an error if the number of queries is >= 5 for a given endpoint.
 * @param {Object} endpoint - The endpoint object containing protocol and name properties.
 * @throws {Error} If the number of queries for the endpoint is >= 5.
 */
// Define a new WeakMap instance
export const weakMap = new WeakMap();
let i = 1;

export function queryAPI(endpoint) {
  weakMap.set(endpoint, i);
  i += 1;
  const query = weakMap.get(endpoint);
  if (query >= 5) {
    throw new Error('Endpoint load is high');
  }
}
