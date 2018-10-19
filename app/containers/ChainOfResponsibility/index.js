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
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class ChainOfResponsibility extends React.PureComponent {
  constructor() {
    super();
    this.getAccountCode = this.getAccountCode.bind(this);
    this.getAccountsCode = this.getAccountsCode.bind(this);
    this.getPaymentCode = this.getPaymentCode.bind(this);
  }

  getAccountCode() {
    return `
    function addMessage(message) {
      messages.push(message);
    }
    
    export function getMessages() {
      return messages;
    }
    
    export function resetMessages() {
      messages.splice(0, messages.length);
    }

    class Accounts {
      constructor() {
        this.successor = null;
        this.balance = null;
        this.accountName = null;
    
        this.setNext = account => {
          this.successor = account;
        };
    
        this.pay = amountToPay => {
          if (this.canPay(amountToPay)) {
            addMessage('Paid \${amountToPay} using \${this.accountName}');
          } else if (this.successor) {
            addMessage('Cannot pay using \${this.accountName}. Proceeding...');
            this.successor.pay(amountToPay);
          } else {
            throw new Error('None of the accounts have enough balance');
          }
        };
    
        this.canPay = amount => this.balance >= amount;
      }
    }
    `;
  }

  getAccountsCode() {
    return `
    class Bank extends Accounts {
      constructor(balance) {
        super();
        this.balance = balance;
        this.accountName = 'The Bank';
      }
    }
    
    class Paypal extends Accounts {
      constructor(balance) {
        super();
        this.balance = balance;
        this.accountName = 'Paypal';
      }
    }
    
    class Bitcoin extends Accounts {
      constructor(balance) {
        super();
        this.balance = balance;
        this.accountName = 'Bitcoin';
      }
    }
    `;
  }

  getPaymentCode() {
    return `
    const bank = new Bank(100); // Bank with balance 100
    const paypal = new Paypal(200); // Paypal with balance 200
    const btc = new Bitcoin(300); // Bitcoin with balance 300

    bank.setNext(paypal);
    paypal.setNext(btc);

    // Let's try to pay using the first priority i.e. bank.
    bank.pay(259);


    {getMessages().map((msg, i) => (
      <p className="subtitle" key={i.toString()}>
        {msg}
      </p>
    ))}
    `;
  }

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
        <HomeBtn
          previous={{ name: 'Proxy', url: 'proxy' }}
          next={{ name: 'Command', url: 'command' }}
        />
        <div className="header">Chain of Responsibility</div>
        <div className="instructions">The way my bank account is set up...</div>
        <div className="subtitle">
          A chain of responsibility gives a little decision-making power to the
          code by allowing a request to traverse over a series of objects until
          it finds a suitable handler. Lets setup a base Account class.
        </div>
        <DpHighlighter code={this.getAccountCode()} />
        <div className="subtitle">
          We will also create a series of accounts that will handle our
          payments.
        </div>
        <DpHighlighter code={this.getAccountsCode()} />
        <div className="subtitle">
          Now when we setup a bank instance and attempt to make a payment, our
          chain of responsibility will go through each account in the order we
          defined to determine which account has sufficient funds to make the
          payment.
        </div>
        <DpHighlighter code={this.getPaymentCode()} />
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
