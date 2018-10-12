/**
 *
 * Facade
 *
 * Real World Example
 *
 * How do you turn on the computer? "Hit the power button"
 * you say! That is what you believe because you are using
 * a simple interface that computer provides on the outside,
 * internally it has to do a lot of stuff to make it happen.
 * This simple interface to the complex subsystem is a facade.
 *
 * In plain words
 *
 * Facade pattern provides a simplified interface to a complex subsystem.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Computer, { ComputerFacade } from '../../components/Computer';
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class Facade extends React.PureComponent {
  render() {
    const computer = new ComputerFacade(new Computer());

    return (
      <div>
        <div className="header">Facade</div>
        <div className="instructions">Seems simple enough</div>
        <p className="subtitle">Turn on: {computer.turnOn()}</p>
        <p className="subtitle">Turn off: {computer.turnOff()}</p>
      </div>
    );
  }
}

Facade.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Facade);
