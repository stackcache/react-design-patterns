/**
 *
 * Employee
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Employee extends React.PureComponent {
  constructor(name, salary) {
    super();
    this.name = name;
    this.salary = salary;
  }
}

export class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.name = name;
    this.salary = salary;
  }
}

export class Designer extends Employee {
  constructor(name, salary) {
    super(name, salary);
    this.name = name;
    this.salary = salary;
  }
}

Employee.propTypes = {};

export default Employee;
