/**
 *
 * Flyweight
 *
 * Real world example
 *
 * Did you ever have fresh tea from some stall?
 * They often make more than one cup that you demanded
 * and save the rest for any other customer so to save
 * the resources e.g. gas etc. Flyweight pattern is all
 * about that i.e. sharing.
 *
 * In plain words
 *
 * It is used to minimize memory usage or computational
 * expenses by sharing as much as possible with similar
 * objects.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TeaShop, { TeaMaker } from '../../components/TeaShop';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Flyweight extends React.PureComponent {
  constructor() {
    super();
    this.getTeaCode = this.getTeaCode.bind(this);
    this.getFlyweightCode = this.getFlyweightCode.bind(this);
    this.getOrderCode = this.getOrderCode.bind(this);
  }

  getTeaCode() {
    return `
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
    `;
  }

  getFlyweightCode() {
    return `
    class TeaShop {
      constructor(teaMaker) {
        this.teaMaker = teaMaker;
        this.orders = [];
    
        this.takeOrder = (teaType, table) => {
          this.orders[table] = this.teaMaker.make(teaType);
        };
    
        this.serve = () => {
          const messages = [];
          const tables = Object.keys(this.orders);
          tables.forEach(table => {
            messages.push('Serving tea to table# \${table}');
          });
          return messages;
        };
      }
    }`;
  }

  getOrderCode() {
    return `
    const teaMaker = new TeaMaker();
    const shop = new TeaShop(teaMaker);
    shop.takeOrder('less sugar', 1);
    shop.takeOrder('more milk', 2);
    shop.takeOrder('less sugar', 4);
    shop.takeOrder('without sugar', 5);
    const orders = shop
      .serve()
      .map(order => <p className="subtitle">{order}</p>);

    <div>{orders}</div>
    `;
  }

  render() {
    const teaMaker = new TeaMaker();
    const shop = new TeaShop(teaMaker);
    shop.takeOrder('less sugar', 1);
    shop.takeOrder('more milk', 2);
    shop.takeOrder('less sugar', 4);
    shop.takeOrder('without sugar', 5);
    const orders = shop
      .serve()
      .map(order => <p className="subtitle">{order}</p>);

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Facade', url: 'facade' }}
          next={{ name: 'Proxy', url: 'proxy' }}
        />
        <div className="header">Flyweight</div>
        <div className="instructions">Make enough for everyone</div>
        <p className="subtitle">
          Flyweight is a pattern that lets us fit more objects into the
          available amount of RAM by sharing common parts of object state among
          multiple objects instead of keeping it in each object. In this
          example, we are making tea for people, but rather than making a
          different pot for each person, we will make one pot and share it.
        </p>
        <DpHighlighter code={this.getTeaCode()} />
        <p className="subtitle">
          Our tea maker will determine if there is already tea available that
          fits the order before making new tea. Next we will make our Tea Shop
          class which will be responsible for serving the tea.
        </p>
        <DpHighlighter code={this.getFlyweightCode()} />
        <p className="subtitle">
          Finally, we can create instances of our classes and start taking
          orders.
        </p>
        <DpHighlighter code={this.getOrderCode()} />
        {orders}
      </div>
    );
  }
}

Flyweight.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Flyweight);
