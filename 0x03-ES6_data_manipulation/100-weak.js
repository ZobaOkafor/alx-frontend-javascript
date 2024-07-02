// Define a new WeakMap instance
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of times it is called for each endpoint.
 * Throws an error if the number of queries is >= 5 for a given endpoint.
 * @param {Object} endpoint - The endpoint object containing protocol and name properties.
 * @throws {Error} If the number of queries for the endpoint is >= 5.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) throw Error('Endpoint load is high');
}
