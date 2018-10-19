/**
 *
 * Coffee
 *
 */

/* eslint-disable react/prefer-stateless-function */
class Coffee {
  constructor() {
    this.getCost = () => {};
    this.getDescription = () => {};
  }
}

export class SimpleCoffee extends Coffee {
  constructor() {
    super();
    this.getCost = () => 10;
    this.getDescription = () => 'Simple coffee';
  }
}

export class MilkCoffee extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
    this.getCost = () => this.coffee.getCost() + 2;
    this.getDescription = () => `${this.coffee.getDescription()}, milk`;
  }
}

export class WhipCoffee extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
    this.getCost = () => this.coffee.getCost() + 5;
    this.getDescription = () => `${this.coffee.getDescription()}, whip`;
  }
}

export class VanillaCoffee extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
    this.getCost = () => this.coffee.getCost() + 3;
    this.getDescription = () => `${this.coffee.getDescription()}, vanilla`;
  }
}

Coffee.propTypes = {};

export default Coffee;
