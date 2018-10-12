/**
 *
 * Command
 *
 * Real World Example
 *
 * A generic example would be you ordering food at a restaurant.
 * You (i.e. Client) ask the waiter (i.e. Invoker) to bring some
 * food (i.e. Command) and waiter simply forwards the request to
 * Chef (i.e. Receiver) who has the knowledge of what and how to
 * cook. Another example would be you (i.e. Client) switching on
 * (i.e. Command) the television (i.e. Receiver) using a remote
 * control (Invoker).
 *
 * In plain words
 *
 * Allows you to encapsulate actions in objects. The key idea
 * behind this pattern is to provide the means to decouple client
 * from receiver.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Bulb, { TurnOn, TurnOff, RemoteControl } from '../../components/Bulb';
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class Command extends React.PureComponent {
  render() {
    const bulb = new Bulb();
    const turnOn = new TurnOn(bulb);
    const turnOff = new TurnOff(bulb);
    const remote = new RemoteControl();
    return (
      <div>
        <div className="header">Command</div>
        <div className="instructions">Turn on the lights</div>
        <p className="subtitle">Turn on: {remote.submit(turnOn)}</p>
        <p className="subtitle">Turn off: {remote.submit(turnOff)}</p>
      </div>
    );
  }
}

Command.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Command);
