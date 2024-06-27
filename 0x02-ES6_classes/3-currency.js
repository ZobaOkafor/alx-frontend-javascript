export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, 'Code');
    this._name = this.validateString(name, 'Name');
  }

  // Validators
  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(value) {
    this._code = this.validateString(value, 'Code');
  }

  set name(value) {
    this._name = this.validateString(value, 'Name');
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
