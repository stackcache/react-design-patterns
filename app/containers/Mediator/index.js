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
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Mediator extends React.PureComponent {
  constructor() {
    super();
    this.getRoomCode = this.getRoomCode.bind(this);
    this.getUserCode = this.getUserCode.bind(this);
    this.getConvoCode = this.getConvoCode.bind(this);
  }

  getRoomCode() {
    return `
    class ChatRoomMediator {
      constructor() {
        this.showMessage = null;
      }
    }
    
    class ChatRoom extends ChatRoomMediator {
      constructor() {
        super();
        this.showMessage = (user, message) => {
          const sender = user.name;
          return '[\${sender}]: \${message}';
        };
      }
    }
    `;
  }

  getUserCode() {
    return `
    class User {
      constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
        this.send = message => this.mediator.showMessage(this, message);
      }
    }
    `;
  }

  getConvoCode() {
    return `
    const mediator = new ChatRoom();
    const jay = new User('Jay', mediator);
    const john = new User('John', mediator);

    <p>{john.send('Hi there!')}</p>
    <p>{jay.send('Hey!')}</p>
    `;
  }

  render() {
    const mediator = new ChatRoom();
    const jay = new User('Jay', mediator);
    const john = new User('John', mediator);

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Iterator', url: 'iterator' }}
          next={{ name: 'Memento', url: 'memento' }}
        />
        <div className="header">Mediator</div>
        <div className="instructions">Nothing wrong with a middleman</div>
        <p className="subtitle">
          A mediator controls the interaction between objects. This decouples
          objects from each other, eliminating the need for them to be aware of
          an implementation other than their own. A good examples of this is a
          chat room. The room is the mediator between 2 users, giving them the
          ability to indirectly communicate.
        </p>
        <DpHighlighter code={this.getRoomCode()} />
        <p className="subtitle">
          Next, we will create a User object that will accept a name, and a
          mediator (chat room) to communicate through. If multiple users join
          the same room, they will be able to communicate with each other.
        </p>
        <DpHighlighter code={this.getUserCode()} />
        <p className="subtitle">
          Finally, we can create our chat room and add some user to it.
        </p>
        <DpHighlighter code={this.getConvoCode()} />
        <p className="subtitle">{john.send('Hi there!')}</p>
        <p className="subtitle">{jay.send('Hey!')}</p>
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
