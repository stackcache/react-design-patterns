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
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Composite extends React.PureComponent {
  constructor() {
    super();
    this.getEmployeeCode = this.getEmployeeCode.bind(this);
    this.getOrgCode = this.getOrgCode.bind(this);
    this.getSalaryCode = this.getSalaryCode.bind(this);
  }

  getEmployeeCode() {
    return `
    class Employee {
      constructor(name, salary) {
        this.name = name;
        this.salary = salary;
      }
    }
    
    class Developer extends Employee {
      constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
      }
    }
    
    class Designer extends Employee {
      constructor(name, salary) {
        super(name, salary);
        this.name = name;
        this.salary = salary;
      }
    }
    `;
  }

  getOrgCode() {
    return `
    class Organization {
      constructor() {
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
    `;
  }

  getSalaryCode() {
    return `
    // Prepare the employees
    const john = new Developer('John Doe', 12000);
    const jane = new Designer('Jane Doe', 15000);
    const org = new Organization();
    org.addEmployee(john);
    org.addEmployee(jane);

    <p>Net Salaries: \${org.getNetSalaries()}</p>
    `;
  }

  render() {
    // Prepare the employees
    const john = new Developer('John Doe', 12000);
    const jane = new Designer('Jane Doe', 15000);
    const org = new Organization();
    org.addEmployee(john);
    org.addEmployee(jane);

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Bridge', url: 'bridge' }}
          next={{ name: 'Decorator', url: 'decorator' }}
        />
        <div className="header">Composite</div>
        <div className="instructions">
          I love it when a good plan comes together
        </div>
        <p className="subtitle">
          Composites are all about parts coming together to make a whole. In
          this example, we will calculate the total of all employee salaries at
          a company.
        </p>
        <DpHighlighter code={this.getEmployeeCode()} />
        <p className="subtitle">
          Next, we will create an organization that our employees will be a part
          of.
        </p>
        <DpHighlighter code={this.getOrgCode()} />
        <p className="subtitle">
          Now we can utilize our composite to calculate all of the salaries.
        </p>
        <DpHighlighter code={this.getSalaryCode()} />
        <p className="subtitle">Net Salaries: ${org.getNetSalaries()}</p>
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
