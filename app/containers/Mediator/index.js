/**
 *
 * Mediator
 *
 * Real World Examples
 *
 * A general example would be when you talk to someone
 * on your mobile phone, there is a network provider sitting
 * between you and them and your conversation goes through
 * it instead of being directly sent. In this case network
 * provider is mediator.
 *
 * In plain words
 *
 * Mediator pattern adds a third party object (called mediator)
 * to control the interaction between two objects (called
 * colleagues). It helps reduce the coupling between the classes
 * communicating with each other. Because now they don't need to
 * have the knowledge of each other's implementation.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ChatRoom, { User } from '../../components/ChatRoom';

/* eslint-disable react/prefer-stateless-function */
export class Mediator extends React.PureComponent {
  render() {
    const mediator = new ChatRoom();
    const jay = new User('Jay', mediator);
    const john = new User('John', mediator);

    return (
      <div>
        <h1>Mediator</h1>
        <p>{john.send('Hi there!')}</p>
        <p>{jay.send('Hey!')}</p>
      </div>
    );
  }
}

Mediator.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Mediator);
