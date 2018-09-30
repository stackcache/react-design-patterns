/**
 *
 * Organization
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Organization extends React.PureComponent {
  constructor() {
    super();
    this.employees = [];
    this.addEmployee = this.addEmployee.bind(this);
    this.getNetSalaries = this.getNetSalaries.bind(this);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getNetSalaries() {
    let netSalary = 0;

    this.employees.forEach(employee => {
      netSalary += employee.salary;
    });

    return netSalary;
  }
}

Organization.propTypes = {};

export default Organization;
