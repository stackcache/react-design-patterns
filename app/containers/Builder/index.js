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
 * of an object, or when there are a lot of steps involved in the creation
 * of an object.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../HomePage/HomePage.css';
import HomeBtn from '../../components/HomeBtn';
import DpHighlighter from '../../components/DpHighlighter';

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
  constructor() {
    super();
    this.getBurgerCode = this.getBurgerCode.bind(this);
    this.getBuilderCode = this.getBuilderCode.bind(this);
  }

  getBurgerCode() {
    return `
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
    `;
  }

  getBuilderCode() {
    return `
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
    `;
  }

  getOrderCode() {
    return `
      const burger = new BurgerBuilder(14)
        .addPepperoni()
        .addLettuce()
        .addTomato()
        .build();

      <div className="subtitle">Burger #{burger.size}</div>
      {!burger.cheese && <p className="subtitle">no cheese</p>}
      {burger.pepperoni && <p className="subtitle">add pepperoni</p>}
      {burger.lettuce && <p className="subtitle">add lettuce</p>}
      {burger.tomato && <p className="subtitle">add tomato</p>}
    `;
  }

  render() {
    const burger = new BurgerBuilder(14)
      .addPepperoni()
      .addLettuce()
      .addTomato()
      .build();

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Abstract Factory', url: 'abstract-factory' }}
          next={{ name: 'Prototype', url: 'prototype' }}
        />
        <div className="header">Builder</div>
        <div className="instructions">Build a burger</div>
        <div className="subtitle">
          Builders are useful when there could be several flavors of an object,
          or when there are a lot of steps involved in the creation of an
          object. So in order to build our burgers, we first need a Burger
          class.
        </div>
        <DpHighlighter code={this.getBurgerCode()} />
        <div className="subtitle">
          Next, we will create a builder that will be responsible for taking a
          burger in as a parameter, apply different ingredients via methods and
          return the burger after its state has been modified.
        </div>
        <DpHighlighter code={this.getBuilderCode()} />
        <div className="subtitle">Finally, we can create our burger!</div>
        <DpHighlighter code={this.getOrderCode()} />
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
