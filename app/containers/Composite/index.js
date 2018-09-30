/**
 *
 * Composite
 *
 * Real World Example
 *
 * Every organization is composed of employees. Each
 * of the employees has the same features i.e. has a
 * salary, has some responsibilities, may or may not
 * report to someone, may or may not have some subordinates etc.
 *
 * In plain words
 *
 * Composite pattern lets clients treat the individual objects
 * in a uniform manner.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Developer, Designer } from '../../components/Employee';
import Organization from '../../components/Organization';

/* eslint-disable react/prefer-stateless-function */
export class Composite extends React.PureComponent {
  render() {
    // Prepare the employees
    const john = new Developer('John Doe', 12000);
    const jane = new Designer('Jane Doe', 15000);
    const org = new Organization();
    org.addEmployee(john);
    org.addEmployee(jane);

    return (
      <div>
        <h1>Composite</h1>
        <p>Net Salaries: ${org.getNetSalaries()}</p>
      </div>
    );
  }
}

Composite.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Composite);
