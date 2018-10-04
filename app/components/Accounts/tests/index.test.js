// import React from 'react';
// import { shallow } from 'enzyme';

import { Bank, Paypal, Bitcoin } from '../index';

describe('<Accounts />', () => {
  it('should be able to create a bank account', () => {
    const bank = new Bank(100);
    expect(bank.balance).toEqual(100);
  });

  it('should be able to create a paypal account', () => {
    const paypal = new Paypal(100);
    expect(paypal.balance).toEqual(100);
  });

  it('should be able to create a bitcoin account', () => {
    const bitcoin = new Bitcoin(100);
    expect(bitcoin.balance).toEqual(100);
  });

  it('should be able to set a successor account', () => {
    const bank = new Bank(100);
    const bitcoin = new Bitcoin(200);
    bank.setNext(bitcoin);
    expect(bank.successor.accountName).toEqual('Bitcoin');
  });

  it('should throw error if no accounts have enough balance to pay', () => {
    const bank = new Bank(100);
    const bitcoin = new Bitcoin(200);
    bank.setNext(bitcoin);
    const bankTest = () => bank.pay(259);
    expect(bankTest).toThrow(Error);
  });
});
