/**
 *
 * ChainOfResponsibility
 *
 * Real World Example
 *
 * For example, you have three payment methods (A, B and C)
 * setup in your account; each having a different amount in it.
 * A has 100 USD, B has 300 USD and C having 1000 USD and the
 * preference for payments is chosen as A then B then C. You
 * try to purchase something that is worth 210 USD. Using
 * Chain of Responsibility, first of all account A will be
 * checked if it can make the purchase, if yes purchase will
 * be made and the chain will be broken. If not, request will
 * move forward to account B checking for amount if yes chain
 * will be broken otherwise the request will keep forwarding
 * until it finds the suitable handler. Here A, B and C are links
 * of the chain and the whole phenomenon is Chain of Responsibility.
 *
 * In plain words
 *
 * It helps building a chain of objects. Request enters from one
 * end and keeps going from object to object till it finds the
 * suitable handler.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Bank,
  Paypal,
  Bitcoin,
  getMessages,
  resetMessages,
} from '../../components/Accounts';
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class ChainOfResponsibility extends React.PureComponent {
  render() {
    resetMessages();
    const bank = new Bank(100); // Bank with balance 100
    const paypal = new Paypal(200); // Paypal with balance 200
    const btc = new Bitcoin(300); // Bitcoin with balance 300

    bank.setNext(paypal);
    paypal.setNext(btc);

    // Let's try to pay using the first priority i.e. bank.
    bank.pay(259);
    return (
      <div>
        <div className="header">Chain of Responsibility</div>
        <div className="instructions">Who has my back?</div>
        {getMessages().map((msg, i) => (
          <p className="subtitle" key={i.toString()}>
            {msg}
          </p>
        ))}
      </div>
    );
  }
}

ChainOfResponsibility.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ChainOfResponsibility);
