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
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Observer extends React.PureComponent {
  constructor() {
    super();
    this.getPostCode = this.getPostCode.bind(this);
    this.getSeekerCode = this.getSeekerCode.bind(this);
    this.getAgencyCode = this.getAgencyCode.bind(this);
    this.getNewJobCode = this.getNewJobCode.bind(this);
  }

  getPostCode() {
    return `
    class JobPost {
      constructor(title) {
        this.title = title;
      }
    }
    `;
  }

  getSeekerCode() {
    return `
    class JobSeeker {
      constructor(name) {
        this.name = name;
        this.onJobPosted = job => 'Hi, \${this.name}! New job posted: \${job.title}';
      }
    }
    `;
  }

  getAgencyCode() {
    return `
    class EmploymentAgency {
      constructor() {
        this.observers = [];
        this.messages = [];
        this.notify = jobPosting => {
          this.observers.forEach(observer => {
            this.messages.push(observer.onJobPosted(jobPosting));
          });
    
          return this.messages;
        };
    
        this.attach = observer => {
          this.observers.push(observer);
        };
    
        this.addJob = jobPosting => this.notify(jobPosting);
      }
    }
    `;
  }

  getNewJobCode() {
    return `
    // Create subscribers
    const johnDoe = new JobSeeker('John Doe');
    const janeDoe = new JobSeeker('Jane Doe');

    // Create publisher and attach subscribers
    const jobPostings = new EmploymentAgency();
    jobPostings.attach(johnDoe);
    jobPostings.attach(janeDoe);

    // Add a new job and see if subscribers get notified
    const results = jobPostings.addJob(new JobPost('Software Engineer'));

    {results.map((result, i) => (
      <p className="subtitle" key={i.toString()}>
        {result}
      </p>
    ))}
    `;
  }

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
        <HomeBtn
          previous={{ name: 'Memento', url: 'memento' }}
          next={{ name: 'Visitor', url: 'visitor' }}
        />
        <div className="header">Observer</div>
        <div className="instructions">Pubba sub sub!</div>
        <p className="subtitle">
          If you have ever subscribed to an email list, or job search listing,
          you are familiar with this pattern already. In this example, we will
          create a job posting and have a couple of users subscribe to that
          posting to receive any updates about it. Lets create a JobPost object
          that has a title.
        </p>
        <DpHighlighter code={this.getPostCode()} />
        <p className="subtitle">
          Next, we will create a JobSeeker object that will have a name and a
          method to inform them when a job they are interested in is posted.
        </p>
        <DpHighlighter code={this.getSeekerCode()} />
        <p className="subtitle">
          We also need to create the Job Employement Agency that will be
          responsible for posting the jobs and notifying who ever wants to know
          about the jobs posted.
        </p>
        <DpHighlighter code={this.getAgencyCode()} />
        <p className="subtitle">
          Lets put them all together and see what the result is.
        </p>
        <DpHighlighter code={this.getNewJobCode()} />
        {results.map((result, i) => (
          <p className="subtitle" key={i.toString()}>
            {result}
          </p>
        ))}
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
