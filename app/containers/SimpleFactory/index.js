/**
 *
 * SimpleFactory
 *
 * Real world example
 *
 * Consider, you are building a house and you need doors.
 * It would be a mess if every time you need a door, you put on your
 * carpenter clothes and start making a door in your house. Instead
 * you get it made from a factory.
 *
 * In plain words
 *
 * Simple factory simply generates an instance for client without
 * exposing any instantiation logic to the client
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../HomePage/HomePage.css';

/* This is a Simple Being Factory */
class Being {
  constructor(being) {
    this.canDoAnything = false;

    if (being === 'god') {
      this.canDoAnything = true;
    }
  }
}

/* eslint-disable react/prefer-stateless-function */
export class SimpleFactory extends React.PureComponent {
  render() {
    const being1 = new Being('man');
    const being2 = new Being('god');

    return (
      <div>
        <div className="header">Simple Factory</div>
        <div className="instructions">Men vs. God</div>
        <div className="subtitle">
          {!being1.canDoAnything && <p>Man cannot do anything</p>}
        </div>
        <div className="subtitle">
          {being2.canDoAnything && <p>God can do anything</p>}
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SimpleFactory);
