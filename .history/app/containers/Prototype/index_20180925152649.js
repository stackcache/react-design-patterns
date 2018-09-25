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

/* eslint-disable react/prefer-stateless-function */
export class Prototype extends React.PureComponent {
  render() {
    const orig = new Sheep('Stack', 'Field Sheep');
    const clone = Object.assign({}, orig); // clone of original sheep
    clone.name = 'Cache';

    return (
      <div>
        <h1>Prototype</h1>
        <h2>Original </h2>
        <p>
          {orig.name}, {orig.category}
        </p>
        <h2>Clone</h2>
        <p>
          {clone.name}, {clone.category}
        </p>
      </div>
    );
  }
}

Prototype.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Prototype);
