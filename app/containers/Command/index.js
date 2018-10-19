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
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Command extends React.PureComponent {
  constructor() {
    super();
    this.getBulbCode = this.getBulbCode.bind(this);
    this.getCommanderCode = this.getCommanderCode.bind(this);
    this.getInvokerCode = this.getInvokerCode.bind(this);
    this.getCommandCode = this.getCommandCode.bind(this);
  }

  getBulbCode() {
    return `
    class Bulb {
      constructor() {
        this.turnOn = () => 'Bulb has been lit';
        this.turnOff = () => 'Darkness!';
      }
    }
    `;
  }

  getCommanderCode() {
    return `
    class Commander {
      constructor() {
        this.execute = null;
        this.undo = null;
        this.redo = null;
      }
    }
    
    // Command
    class TurnOn extends Commander {
      constructor(bulb) {
        super();
        this.bulb = bulb;
        this.execute = () => this.bulb.turnOn();
        this.undo = () => this.bulb.turnOff();
        this.redo = () => this.execute();
      }
    }
    
    class TurnOff extends Commander {
      constructor(bulb) {
        super();
        this.bulb = bulb;
        this.execute = () => this.bulb.turnOff();
        this.undo = () => this.bulb.turnOn();
        this.redo = () => this.execute();
      }
    }
    `;
  }

  getInvokerCode() {
    return `
    class RemoteControl {
      constructor() {
        this.submit = command => command.execute();
        this.undo = command => command.undo();
        this.redo = command => command.redo();
      }
    }
    `;
  }

  getCommandCode() {
    return `
    const bulb = new Bulb();
    const turnOn = new TurnOn(bulb);
    const turnOff = new TurnOff(bulb);
    const remote = new RemoteControl();

    <p>Turn on: {remote.submit(turnOn)}</p>
    <p>Turn off: {remote.submit(turnOff)}</p>
    `;
  }

  render() {
    const bulb = new Bulb();
    const turnOn = new TurnOn(bulb);
    const turnOff = new TurnOff(bulb);
    const remote = new RemoteControl();

    return (
      <div>
        <HomeBtn
          previous={{
            name: 'Chain of Responsibility',
            url: 'chain-of-responsibility',
          }}
          next={{ name: 'Iterator', url: 'iterator' }}
        />
        <div className="header">Command</div>
        <div className="instructions">Turn the lights on!</div>
        <p className="subtitle">
          Have you ever ordered food from somewhere like the Waffle House? You
          may tell the waiter or waitress that you want 2 eggs scrambled with
          grits, but what they yell to the cook is &quot;MARK ORDER
          SCRAMBLED&quot;. This is an example of the Command pattern at work.
          You may not know what it takes to get your order, you just know what
          you want. Lets code another example by telling our system to turn on a
          light Bulb.
        </p>
        <DpHighlighter code={this.getBulbCode()} />
        <p className="subtitle">
          Now we need a commander that will be responsible for executing the
          commands requested by the user.
        </p>
        <DpHighlighter code={this.getCommanderCode()} />
        <p className="subtitle">
          Next, we need a remote control which will serve as the invoker that
          will call the commands.
        </p>
        <DpHighlighter code={this.getInvokerCode()} />
        <p className="subtitle">Finally, we can implement!</p>
        <DpHighlighter code={this.getCommandCode()} />
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
