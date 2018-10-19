/**
 *
 * Proxy
 *
 * Real World Example
 *
 * Have you ever used an access card to go through a door?
 * There are multiple options to open that door i.e. it
 * can be opened either using access card or by pressing a
 * button that bypasses the security. The door's main
 * functionality is to open but there is a proxy added on
 * top of it to add some functionality. Let me better
 * explain it using the code example below.
 *
 * In plain words
 *
 * Using the proxy pattern, a class represents the functionality of another class.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SecuredDoor from '../../components/SecuredDoor';
import { LabDoor } from '../../components/Door';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Proxy extends React.PureComponent {
  constructor() {
    super();
    this.getDoorCode = this.getDoorCode.bind(this);
    this.getProxyCode = this.getProxyCode.bind(this);
    this.getAccessCode = this.getAccessCode.bind(this);
  }

  getDoorCode() {
    return `
    class Door {
      constructor() {
        this.getDescription = () => {};
        this.open = () => {};
        this.close = () => {};
      }
    }
    
    class LabDoor extends Door {
      constructor() {
        super();
        this.open = () => 'Opening lab door';
        this.close = () => 'Closing the lab door';
      }
    }`;
  }

  getProxyCode() {
    return `
    class SecuredDoor {
      constructor(door) {
        this.door = door;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.authenticate = this.authenticate.bind(this);
      }
    
      open(password) {
        if (this.authenticate(password)) {
          return this.door.open();
        }
    
        return 'You are not authorized to open this door.';
      }
    
      close() {
        this.door.close();
      }
    
      authenticate(password) {
        return password === '$ecr3t';
      }
    }
    `;
  }

  getAccessCode() {
    return `
    const door = new SecuredDoor(new LabDoor());
    const denied = door.open('inv@lid'); // invalid passcode
    const approved = door.open('$ecr3t'); // valid passcode
    door.close();

    <p>I am user1. Do I have access? {denied}</p>
    <p>I am user2. Do I have access? {approved}</p>
    `;
  }

  render() {
    const door = new SecuredDoor(new LabDoor());
    const denied = door.open('inv@lid');
    const approved = door.open('$ecr3t');
    door.close();

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Flyweight', url: 'flyweight' }}
          next={{
            name: 'Chain of Responsibility',
            url: 'chain-of-responsibility',
          }}
        />
        <div className="header">Proxy</div>
        <div className="instructions">What&#39;s the secret password?</div>
        <p className="subtitle">
          Anyone can open a door, but if you had some top secret plans that you
          wanted to keep safe, you would probably put some kind of lock to act
          as a proxy to what is behind that door. In this example, we will use
          the Proxy pattern to gain access to a secure lab. First, we need a
          door.
        </p>
        <DpHighlighter code={this.getDoorCode()} />
        <p className="subtitle">Now we can create our proxy to the lab.</p>
        <DpHighlighter code={this.getProxyCode()} />
        <p className="subtitle">
          At this point, if we create a new SecuredDoor and attempted to access
          it with the incorrect password, we should be denied.
        </p>
        <DpHighlighter code={this.getAccessCode()} />
        <p className="subtitle">I am user1. Do I have access? {denied}</p>
        <p className="subtitle">I am user2. Do I have access? {approved}</p>
      </div>
    );
  }
}

Proxy.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Proxy);
