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
 * Factory method provides a way to delegate the instantiation
 * logic to child classes.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../HomePage/HomePage.css';
import HomeBtn from '../../components/HomeBtn';
import DpHighlighter from '../../components/DpHighlighter';

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
  constructor() {
    super();
    this.getInterviewerCode = this.getInterviewerCode.bind(this);
    this.getInterviewsCode = this.getInterviewsCode.bind(this);
    this.getInterviewerTypesCode = this.getInterviewerTypesCode.bind(this);
    this.getHiringMgrsCode = this.getHiringMgrsCode.bind(this);
  }

  getInterviewerCode() {
    return `
    class Interviewer {
      constructor() {
        this.askQuestions = () => {};
      }
    }`;
  }

  getInterviewerTypesCode() {
    return `
    // Interview Developer candidates
    class Developer extends Interviewer {
      constructor() {
        super();
        this.askQuestions = () => 'asking about design patterns';
      }
    }
    
    // Interview Marketing candidates
    class Marketing extends Interviewer {
      constructor() {
        super();
        this.askQuestions = () => 'asking about social media';
      }
    }`;
  }

  getHiringMgrsCode() {
    return `
    class HiringManager {
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
    }`;
  }

  getInterviewsCode() {
    return `
    const devMgr = new DevelopmentManager();
    const devQs = devMgr.takeInterview();

    const markMgr = new MarketingManager();
    const markQs = markMgr.takeInterview();

    <p className="subtitle">Dev manager will be {devQs}</p>
    <p className="subtitle">Marketing manager will be {markQs}</p>
    `;
  }

  render() {
    const devMgr = new DevelopmentManager();
    const devQs = devMgr.takeInterview();

    const markMgr = new MarketingManager();
    const markQs = markMgr.takeInterview();

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Simple Factory', url: 'simple-factory' }}
          next={{ name: 'Abstract Factory', url: 'abstract-factory' }}
        />
        <div className="header">Factory Method</div>
        <div className="instructions">Setting up a job interview</div>
        <p className="subtitle">
          Factory method provides a way to delegate the instantiation logic to
          child classes. Suppose we want to create several Interviewers, each
          with their own implementation of a method that will ask a candidate
          questions. We would start with a base Interviewer class.
        </p>
        <DpHighlighter code={this.getInterviewerCode()} />
        <p className="subtitle">
          Next, we will create a couple of classes that extend Interviewer and
          have their own implementation of the common askQuestions() method
        </p>
        <DpHighlighter code={this.getInterviewerTypesCode()} />
        <p className="subtitle">
          Now we will create some Hiring Managers that will be responsible for
          assigning interviewers to interviews. Remember, the interview is
          responsible for asking their own questions, so this separates the
          assignment of the object from the implementation of the common method.
        </p>
        <DpHighlighter code={this.getHiringMgrsCode()} />
        <p className="subtitle">
          Now we can create hiring managers and execute interviews
        </p>
        <DpHighlighter code={this.getInterviewsCode()} />
        <p className="subtitle">Dev manager will be {devQs}</p>
        <p className="subtitle">Marketing manager will be {markQs}</p>
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
