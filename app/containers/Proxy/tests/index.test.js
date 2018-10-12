import React from 'react';
import { shallow } from 'enzyme';

import { Proxy, mapDispatchToProps } from '../index';

describe('<Proxy />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<Proxy />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">
          I am user1. Do I have access? You are not authorized to open this
          door.
        </p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
