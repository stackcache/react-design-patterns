/**
 *
 * FactoryMethod
 *
 * Real World Example
 *
 * Consider the case of a hiring manager. It is impossible for
 * one person to interview for each of the positions. Based on
 * the job opening, she has to decide and delegate the interview
 * steps to different people.
 *
 * In plain words
 *
 * It provides a way to delegate the instantiation logic to child classes.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

export class Interviewer {
  constructor() {
    this.askQuestions = () => {};
  }
}

class Developer extends Interviewer {
  constructor() {
    super();
    this.askQuestions = () => 'asking about design patterns';
  }
}

class Marketing extends Interviewer {
  constructor() {
    super();
    this.askQuestions = () => 'asking about social media';
  }
}

export class HiringManager {
  constructor() {
    // Factory method
    this.makeInterviewer = () => new Interviewer();

    this.takeInterview = () => {
      const interviewer = this.makeInterviewer();
      return interviewer.askQuestions();
    };
  }
}

class DevelopmentManager extends HiringManager {
  constructor() {
    super();
    this.makeInterviewer = () => new Developer();
  }
}

class MarketingManager extends HiringManager {
  constructor() {
    super();
    this.makeInterviewer = () => new Marketing();
  }
}

/* eslint-disable react/prefer-stateless-function */
export class FactoryMethod extends React.PureComponent {
  render() {
    const devMgr = new DevelopmentManager();
    const devQs = devMgr.takeInterview();

    const markMgr = new MarketingManager();
    const markQs = markMgr.takeInterview();

    return (
      <div>
        <h1>Factory Method</h1>
        <p>Dev manager will be {devQs}</p>
        <p>Marketing manager will be {markQs}</p>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(FactoryMethod);
