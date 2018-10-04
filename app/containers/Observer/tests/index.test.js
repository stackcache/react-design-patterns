import React from 'react';
import { shallow } from 'enzyme';

import { Observer, mapDispatchToProps } from '../index';

describe('<Observer />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Observer />);
    expect(
      renderedComponent.contains(
        <p>Hi, John Doe! New job posted: Software Engineer</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
