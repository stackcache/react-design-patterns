import React from 'react';
import { shallow } from 'enzyme';

import { Mediator, mapDispatchToProps } from '../index';

describe('<Mediator />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Mediator />);
    expect(renderedComponent.contains(<p>[John]: Hi there!</p>)).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
