/**
 * Constructs a string of set values that start with a specific string.
 * @param {Set} set - The set containing values to filter and construct the string from.
 * @param {string} startString - The string that the values should start with.
 * @returns {string} A string of values from the set that start with startString, separated by '-'.
 */
export default function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));
  return filteredValues.join('-').replace(new RegExp(`^${startString}`), '');
}
