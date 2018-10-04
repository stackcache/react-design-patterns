import JobPost, { JobSeeker, EmploymentAgency } from '../index';

describe('<JobPost />', () => {
  it('Expect to have unit tests specified', () => {
    // Create subscribers
    const johnDoe = new JobSeeker('John Doe');
    const janeDoe = new JobSeeker('Jane Doe');

    // Create publisher and attach subscribers
    const jobPostings = new EmploymentAgency();
    jobPostings.attach(johnDoe);
    jobPostings.attach(janeDoe);

    // Add a new job and see if subscribers get notified
    const results = jobPostings.addJob(new JobPost('Software Engineer'));

    expect(results.length).toEqual(2);
  });
});
