/**
 *
 * TeaShop
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class TeaShop extends React.PureComponent {
  constructor(teaMaker) {
    super();
    this.teaMaker = teaMaker;
    this.orders = [];

    this.takeOrder = (teaType, table) => {
      this.orders[table] = this.teaMaker.make(teaType);
    };

    this.serve = () => {
      const messages = [];
      const tables = Object.keys(this.orders);
      tables.forEach(table => {
        messages.push(`Serving tea to table# ${table}`);
      });
      return messages;
    };
  }
}

// Anything that will be cached is flyweight.
// Types of tea here will be flyweights.
class KarakTea {}

// Acts as a factory and saves the tea
export class TeaMaker {
  constructor() {
    this.availableTea = [];
    this.make = preference => {
      if (!this.availableTea[preference]) {
        this.availableTea[preference] = new KarakTea();
      }

      return this.availableTea[preference];
    };
  }
}

TeaShop.propTypes = {};

export default TeaShop;
