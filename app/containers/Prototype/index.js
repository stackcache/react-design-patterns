/**
 *
 * Prototype
 *
 * Real World Examples
 *
 * Remember dolly? The sheep that was cloned! Lets not
 * get into the details but the key point here is that
 * it is all about cloning
 *
 * In plain words
 *
 * Create object based on an existing object through cloning.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Sheep from '../../components/Sheep';
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class Prototype extends React.PureComponent {
  render() {
    const orig = new Sheep('Stack', 'Field Sheep');
    const clone = Object.assign({}, orig); // clone of original sheep
    clone.name = 'Cache';

    return (
      <div>
        <div className="header">Prototype</div>
        <div className="subtitle head">Original</div>
        <p className="subtitle">
          {orig.name}, {orig.category}
        </p>
        <div className="subtitle head">Clone</div>
        <p className="subtitle">
          {clone.name}, {clone.category}
        </p>
      </div>
    );
  }
}

Prototype.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Prototype);
