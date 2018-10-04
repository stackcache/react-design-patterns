/**
 *
 * JobPost
 *
 */

/* eslint-disable react/prefer-stateless-function */
class JobPost {
  constructor(title) {
    this.title = title;
  }
}

export class JobSeeker {
  constructor(name) {
    this.name = name;
    this.onJobPosted = job => `Hi, ${this.name}! New job posted: ${job.title}`;
  }
}

export class EmploymentAgency {
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

export default JobPost;
