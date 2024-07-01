// Symbol for cloning
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  [cloneSymbol]() {
    const clonedCar = new Car(this._brand, this._motor, this._color);
    return clonedCar;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }

  // Getter methods (optional, but good practice)
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }
}
