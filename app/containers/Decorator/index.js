/**
 *
 * Decorator
 *
 * Real World Example
 *
 * Imagine you run a car service shop offering multiple
 * services. Now how do you calculate the bill to be charged?
 * You pick one service and dynamically keep adding to it the
 * prices for the provided services till you get the final cost.
 *
 * In plain words
 *
 * Decorator pattern lets you dynamically change the behavior
 * of an object at run time by wrapping them in an object of a
 * decorator class.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  SimpleCoffee,
  MilkCoffee,
  WhipCoffee,
  VanillaCoffee,
} from '../../components/Coffee';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Decorator extends React.PureComponent {
  constructor() {
    super();
    this.getCoffeeCode = this.getCoffeeCode.bind(this);
    this.getOrderCode = this.getOrderCode.bind(this);
  }

  getCoffeeCode() {
    return `
    class Coffee {
      constructor() {
        this.getCost = () => {};
        this.getDescription = () => {};
      }
    }
    
    class SimpleCoffee extends Coffee {
      constructor() {
        super();
        this.getCost = () => 10;
        this.getDescription = () => 'Simple coffee';
      }
    }
    
    class MilkCoffee extends Coffee {
      constructor(coffee) {
        super();
        this.coffee = coffee;
        this.getCost = () => this.coffee.getCost() + 2;
        this.getDescription = () => '\${this.coffee.getDescription()}, milk';
      }
    }
    
    class WhipCoffee extends Coffee {
      constructor(coffee) {
        super();
        this.coffee = coffee;
        this.getCost = () => this.coffee.getCost() + 5;
        this.getDescription = () => '\${this.coffee.getDescription()}, whip';
      }
    }
    
    class VanillaCoffee extends Coffee {
      constructor(coffee) {
        super();
        this.coffee = coffee;
        this.getCost = () => this.coffee.getCost() + 3;
        this.getDescription = () => '\${this.coffee.getDescription()}, vanilla';
      }
    }
    `;
  }

  getOrderCode() {
    return `
    let someCoffee = new SimpleCoffee();
    someCoffee = new MilkCoffee(someCoffee); // add milk
    someCoffee = new WhipCoffee(someCoffee); // add whip
    someCoffee = new VanillaCoffee(someCoffee); // add vanilla

    <p className="subtitle">
      {someCoffee.getDescription()}: \${someCoffee.getCost()}
    </p>
    `;
  }

  render() {
    let someCoffee = new SimpleCoffee();
    someCoffee = new MilkCoffee(someCoffee);
    someCoffee = new WhipCoffee(someCoffee);
    someCoffee = new VanillaCoffee(someCoffee);

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Composite', url: 'composite' }}
          next={{ name: 'Facade', url: 'facade' }}
        />
        <div className="header">Decorator</div>
        <div className="instructions">HOW much for a cup of coffee?!</div>
        <p className="subtitle">
          The decorator pattern allows us to change behavior of objects at
          runtime. In this example, we want to order a simple cup of coffee with
          some extras to make it delicious. First, we define our Coffee class.
        </p>
        <DpHighlighter code={this.getCoffeeCode()} />
        <p className="subtitle">
          Now, whenever we want to add something to our coffee, we pass in the
          coffee that we already have, and the getCost method will add to the
          existing cost. At the end, we will have a total price.
        </p>
        <DpHighlighter code={this.getOrderCode()} />
        <p className="subtitle">
          {someCoffee.getDescription()}: ${someCoffee.getCost()}
        </p>
      </div>
    );
  }
}

Decorator.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Decorator);
