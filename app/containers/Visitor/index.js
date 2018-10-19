/**
 *
 * Visitor
 *
 * Real World Example
 *
 * Consider someone visiting Dubai. They just need a way
 * (i.e. visa) to enter Dubai. After arrival, they can come
 * and visit any place in Dubai on their own without having
 * to ask for permission or to do some leg work in order to
 * visit any place here; just let them know of a place and
 * they can visit it. Visitor pattern lets you do just that,
 * it helps you add places to visit so that they can visit
 * as much as they can without having to do any legwork.
 *
 * In plain words
 *
 * Visitor pattern lets you add further operations to objects
 * without having to modify them.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Speak, { Monkey, Tiger, Dolphin, Jump } from '../../components/Animal';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Visitor extends React.PureComponent {
  constructor() {
    super();
    this.getAnimalCode = this.getAnimalCode.bind(this);
    this.getOperationCode = this.getOperationCode.bind(this);
    this.getZooCode = this.getZooCode.bind(this);
  }

  getAnimalCode() {
    return `
    // Visitee
    class Animal {
      constructor() {
        this.accept = null;
      }
    }

    class Monkey extends Animal {
      constructor() {
        super();
        this.shout = () => 'Ooh oo aa aa!';
        this.accept = operation => operation.visitMonkey(this);
      }
    }
    
    class Tiger extends Animal {
      constructor() {
        super();
        this.roar = () => 'Roaaar!';
        this.accept = operation => operation.visitTiger(this);
      }
    }
    
    class Dolphin extends Animal {
      constructor() {
        super();
        this.speak = () => 'eh ehee ehehe ehe!';
        this.accept = operation => operation.visitDolphin(this);
      }
    }
    `;
  }

  getOperationCode() {
    return `
    // Visitor
    class AnimalOperation {
      constructor() {
        this.visitMonkey = null;
        this.visitTiger = null;
        this.visitDolphin = null;
      }
    }

    class Speak extends AnimalOperation {
      constructor() {
        super();
        this.visitMonkey = monkey => monkey.shout();
        this.visitTiger = tiger => tiger.roar();
        this.visitDolphin = dolphin => dolphin.speak();
      }
    }
    
    /**
     * We could have done this simply by having an inheritance
     * hierarchy for the animals but then we would have to modify
     * the animals whenever we would have to add new actions to
     * animals. But now we will not have to change them. For example,
     * let's say we are asked to add the jump behavior to the animals,
     * we can simply add that by creating a new visitor i.e.
     * */
    
    export class Jump extends AnimalOperation {
      constructor() {
        super();
        this.visitMonkey = () => 'jumped 20 feet high into a tree!';
        this.visitTiger = () => 'jumped 7 feet back to the ground!';
        this.visitDolphin = () => 'did a flip out of the water!';
      }
    }
    `;
  }

  getZooCode() {
    return `
    const monkey = new Monkey();
    const tiger = new Tiger();
    const dolphin = new Dolphin();
    const speak = new Speak();
    const jump = new Jump();

    <div]>Visited monkey</div>
    <p>{monkey.accept(speak)}</p>
    <p>{monkey.accept(jump)}</p>
    <div>Visited tiger</div>
    <p>{tiger.accept(speak)}</p>
    <p>{tiger.accept(jump)}</p>
    <div>Visited dolphin</div>
    <p>{dolphin.accept(speak)}</p>
    <p>{dolphin.accept(jump)}</p>
    `;
  }

  render() {
    const monkey = new Monkey();
    const tiger = new Tiger();
    const dolphin = new Dolphin();
    const speak = new Speak();
    const jump = new Jump();

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Observer', url: 'observer' }}
          next={{ name: 'Strategy', url: 'strategy' }}
        />
        <div className="header">Visitor</div>
        <div className="instructions">What does the tiger say?</div>
        <p className="subtitle">
          The visitor patter is one of my favorites. It gives us the ability to
          add operations to objects without having to modify the objects
          themselves. Lets simulate visiting some animals at the zoo.
        </p>
        <DpHighlighter code={this.getAnimalCode()} />
        <p className="subtitle">
          We need a class to handle the act of visiting the animals.
        </p>
        <DpHighlighter code={this.getOperationCode()} />
        <p className="subtitle">
          We have simulated adding the Jump operation later, but it offered a
          whole new host of actions that all of our animals could perform
          without having to touch the animals themselves.
        </p>
        <DpHighlighter code={this.getZooCode()} />
        <div className="subtitle head">Visited monkey</div>
        <p className="subtitle">{monkey.accept(speak)}</p>
        <p className="subtitle">{monkey.accept(jump)}</p>
        <div className="subtitle head">Visited tiger</div>
        <p className="subtitle">{tiger.accept(speak)}</p>
        <p className="subtitle">{tiger.accept(jump)}</p>
        <div className="subtitle head">Visited dolphin</div>
        <p className="subtitle">{dolphin.accept(speak)}</p>
        <p className="subtitle">{dolphin.accept(jump)}</p>
      </div>
    );
  }
}

Visitor.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Visitor);
