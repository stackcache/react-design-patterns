/**
 *
 * Builder
 *
 * Real World Example
 *
 * Imagine you are at Hardee's and you order a specific deal,
 * lets say, "Big Hardee" and they hand it over to you without
 * any questions; this is the example of simple factory. But
 * there are cases when the creation logic might involve more steps.
 * For example you want a customized Subway deal, you have several
 * options in how your burger is made e.g what bread do you want?
 * what types of sauces would you like? What cheese would you want? etc.
 * In such cases builder pattern comes to the rescue.
 *
 * In plain words
 *
 * Allows you to create different flavors of an object while avoiding
 * constructor pollution. Useful when there could be several flavors
 * of an object. Or when there are a lot of steps involved in creation of an object.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../HomePage/HomePage.css';

export class Burger {
  constructor(builder) {
    if (builder) {
      this.size = builder.size;
      this.cheese = builder.cheese;
      this.pepperoni = builder.pepperoni;
      this.lettuce = builder.lettuce;
      this.tomato = builder.tomato;
    } else {
      this.size = false;
      this.cheese = false;
      this.pepperoni = false;
      this.lettuce = false;
      this.tomato = false;
    }
  }
}

export class BurgerBuilder {
  constructor(size) {
    this.size = size;
    this.cheese = false;
    this.pepperoni = false;
    this.lettuce = false;
    this.tomato = false;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Burger(this);
  }
}

/* eslint-disable react/prefer-stateless-function */
export class Builder extends React.PureComponent {
  render() {
    const burger = new BurgerBuilder(14)
      .addPepperoni()
      .addLettuce()
      .addTomato()
      .build();

    return (
      <div>
        <div className="header">Builder</div>
        <div className="instructions">Build a burger</div>
        <div className="subtitle">Burger #{burger.size}</div>
        {!burger.cheese && <p className="subtitle">no cheese</p>}
        {burger.pepperoni && <p className="subtitle">add pepperoni</p>}
        {burger.lettuce && <p className="subtitle">add lettuce</p>}
        {burger.tomato && <p className="subtitle">add tomato</p>}
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Builder);
