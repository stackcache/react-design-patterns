import React from 'react';
import { shallow } from 'enzyme';

import {
  FactoryMethod,
  HiringManager,
  Interviewer,
  mapDispatchToProps,
} from '../index';

describe('<FactoryMethod />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<FactoryMethod />);

    expect(
      renderedComponent.contains(
        <p>Dev manager will be asking about design patterns</p>,
      ),
    ).toEqual(true);

    expect(
      renderedComponent.contains(
        <p>Marketing manager will be asking about social media</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });

  it('should create new Hiring Managers', () => {
    const hMgr = new HiringManager();
    const interviewer = hMgr.makeInterviewer();
    expect(interviewer).toBeInstanceOf(Interviewer);
    expect(interviewer.askQuestions()).toBe(undefined);
  });
});
