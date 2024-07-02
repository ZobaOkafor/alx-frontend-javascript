/**
 * Constructs a string of set values that start with a specific string.
 * @param {Set} set - The set containing values to filter and construct the string from.
 * @param {string} startString - The string that the values should start with.
 * @returns {string} A string of values from the set that start with startString, separated by '-'.
 */
export default function cleanSet(set, startString) {
  let String = '';
  const strArray = [];

  if (startString && typeof startString === 'string') {
    for (const str of set) {
      if (str && str.startsWith(startString)) {
        strArray.push(str.slice(startString.length));
      }
    }
    String = strArray.join('-');
  }
  return String;
}
