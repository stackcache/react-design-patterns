import React from 'react';
import { shallow } from 'enzyme';

import { Iterator, mapDispatchToProps } from '../index';

describe('<Iterator />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Iterator />);
    expect(renderedComponent.contains(<p className="subtitle">89</p>)).toEqual(
      false,
    );
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
