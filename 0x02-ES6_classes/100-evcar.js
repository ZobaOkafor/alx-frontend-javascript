import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
