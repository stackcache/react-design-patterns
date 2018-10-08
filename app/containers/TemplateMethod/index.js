/**
 *
 * TemplateMethod
 *
 * Real World Example
 *
 * Suppose we are getting some house built. The steps for building might look like...
 * Prepare the base of house -> Build the walls -> Add roof -> Add other floors
 * The order of these steps could never be changed i.e. you can't build the roof
 * before building the walls etc but each of the steps could be modified for example
 * walls can be made of wood or polyester or stone.
 *
 * In plain words
 *
 * Template method defines the skeleton of how a certain algorithm could be performed,
 * but defers the implementation of those steps to the children classes.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AndroidBuilder, IosBuilder } from '../../components/Template';

/* eslint-disable react/prefer-stateless-function */
export class TemplateMethod extends React.PureComponent {
  render() {
    const android = new AndroidBuilder();
    const ios = new IosBuilder();
    return (
      <div>
        <h1>Template Method</h1>
        <h2>Android</h2>
        {android.build().map((msg, i) => <p key={i.toString()}>{msg}</p>)}
        <h2>IOS</h2>
        {ios.build().map((msg, i) => <p key={i.toString()}>{msg}</p>)}
      </div>
    );
  }
}

TemplateMethod.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(TemplateMethod);
