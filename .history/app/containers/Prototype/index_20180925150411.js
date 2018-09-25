/**
 *
 * Prototype
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

/* eslint-disable react/prefer-stateless-function */
export class Prototype extends React.PureComponent {
  render() {
    return <div />;
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
