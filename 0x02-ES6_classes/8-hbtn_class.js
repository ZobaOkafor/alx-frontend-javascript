export default class HolbertonClass {
  constructor(size, location) {
    this._size = this.validateNumber(size, 'Size');
    this._location = this.validateString(location, 'Location');
  }

  // Validator for numbers
  validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Validator for strings
  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Override valueOf
  valueOf() {
    return this._size;
  }

  // Override toString
  toString() {
    return this._location;
  }
}
