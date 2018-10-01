/**
 *
 * Facade
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Computer, { ComputerFacade } from '../../components/Computer';

/* eslint-disable react/prefer-stateless-function */
export class Facade extends React.PureComponent {
  render() {
    const computer = new ComputerFacade(new Computer());

    return (
      <div>
        <h1>Facade</h1>
        <p>Turn on: {computer.turnOn()}</p>
        <p>Turn off: {computer.turnOff()}</p>
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
