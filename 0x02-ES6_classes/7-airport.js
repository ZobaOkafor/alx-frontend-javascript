export default class Airport {
  constructor(name, code) {
    this._name = Airport.validateString(name, 'Name');
    this._code = Airport.validateString(code, 'Code');
  }

  // Validator
  static validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Override toString
  toString() {
    return `[object ${this._code}]`;
  }
}
