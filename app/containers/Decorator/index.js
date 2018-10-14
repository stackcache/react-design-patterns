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

/* eslint-disable react/prefer-stateless-function */
export class Decorator extends React.PureComponent {
  render() {
    let someCoffee = new SimpleCoffee();
    someCoffee = new MilkCoffee(someCoffee);
    someCoffee = new WhipCoffee(someCoffee);
    someCoffee = new VanillaCoffee(someCoffee);

    return (
      <div>
        <div className="header">Decorator</div>
        <div className="instructions">HOW much for a cup of coffee?!</div>
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
