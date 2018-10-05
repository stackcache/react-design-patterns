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
        <h1>Visitor</h1>
        <h2>Visited monkey</h2>
        <p>{monkey.accept(speak)}</p>
        <p>{monkey.accept(jump)}</p>
        <h2>Visited tiger</h2>
        <p>{tiger.accept(speak)}</p>
        <p>{tiger.accept(jump)}</p>
        <h2>Visited dolphin</h2>
        <p>{dolphin.accept(speak)}</p>
        <p>{dolphin.accept(jump)}</p>
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
