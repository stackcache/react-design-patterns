import React from 'react';
import { shallow } from 'enzyme';

import { Bridge, mapDispatchToProps } from '../index';

describe('<Bridge />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<Bridge />);
    expect(renderedComponent.contains(<p>About page in Dark Black</p>)).toEqual(
      true,
    );
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
