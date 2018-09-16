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
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSimpleFactory from './selectors';
import reducer from './reducer';

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
        <h1>Simple Factory</h1>
        {being1.canDoAnything && <p>Man can do anything</p>}
        {being2.canDoAnything && <p>God can do anything</p>}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  simplefactory: makeSelectSimpleFactory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'simpleFactory', reducer });

export default compose(
  withReducer,
  withConnect,
)(SimpleFactory);
