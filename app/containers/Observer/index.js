/**
 *
 * Observer
 *
 * Real World Example
 *
 * A good example would be the job seekers where they
 * subscribe to some job posting site and they are
 * notified whenever there is a matching job opportunity.
 *
 * In plain words
 *
 * Defines a dependency between objects so that whenever
 * an object changes its state, all its dependents are notified.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import JobPost, { JobSeeker, EmploymentAgency } from '../../components/JobPost';

/* eslint-disable react/prefer-stateless-function */
export class Observer extends React.PureComponent {
  render() {
    // Create subscribers
    const johnDoe = new JobSeeker('John Doe');
    const janeDoe = new JobSeeker('Jane Doe');

    // Create publisher and attach subscribers
    const jobPostings = new EmploymentAgency();
    jobPostings.attach(johnDoe);
    jobPostings.attach(janeDoe);

    // Add a new job and see if subscribers get notified
    const results = jobPostings.addJob(new JobPost('Software Engineer'));
    return (
      <div>
        <h1>Observer</h1>
        {results.map((result, i) => <p key={i.toString()}>{result}</p>)}
      </div>
    );
  }
}

Observer.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Observer);
