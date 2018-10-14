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

/* eslint-disable react/prefer-stateless-function */
export class Visitor extends React.PureComponent {
  render() {
    const monkey = new Monkey();
    const tiger = new Tiger();
    const dolphin = new Dolphin();
    const speak = new Speak();
    const jump = new Jump();

    return (
      <div>
        <div className="header">Visitor</div>
        <div className="instructions">What does the tiger say?</div>
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
