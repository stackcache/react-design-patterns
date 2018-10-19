/**
 *
 * Accounts
 *
 */

const messages = [];

function addMessage(message) {
  messages.push(message);
}

export function getMessages() {
  return messages;
}

export function resetMessages() {
  messages.splice(0, messages.length);
}

/* eslint-disable react/prefer-stateless-function */
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
        addMessage(`Paid ${amountToPay} using ${this.accountName}`);
      } else if (this.successor) {
        addMessage(`Cannot pay using ${this.accountName}. Proceeding...`);
        this.successor.pay(amountToPay);
      } else {
        throw new Error('None of the accounts have enough balance');
      }
    };

    this.canPay = amount => this.balance >= amount;
  }
}

Accounts.propTypes = {};

export default Accounts;

export class Bank extends Accounts {
  constructor(balance) {
    super();
    this.balance = balance;
    this.accountName = 'The Bank';
  }
}

export class Paypal extends Accounts {
  constructor(balance) {
    super();
    this.balance = balance;
    this.accountName = 'Paypal';
  }
}

export class Bitcoin extends Accounts {
  constructor(balance) {
    super();
    this.balance = balance;
    this.accountName = 'Bitcoin';
  }
}
