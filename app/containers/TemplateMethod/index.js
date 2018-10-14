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
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class TemplateMethod extends React.PureComponent {
  render() {
    const android = new AndroidBuilder();
    const ios = new IosBuilder();
    return (
      <div>
        <div className="header">Template Method</div>
        <div className="instructions">Follow the plan</div>
        <div className="subtitle head">Android</div>
        {android.build().map((msg, i) => (
          <p className="subtitle" key={i.toString()}>
            {msg}
          </p>
        ))}
        <div className="subtitle head">IOS</div>
        {ios.build().map((msg, i) => (
          <p className="subtitle" key={i.toString()}>
            {msg}
          </p>
        ))}
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
