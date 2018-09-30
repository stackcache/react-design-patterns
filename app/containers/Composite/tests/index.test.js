import React from 'react';
import { shallow } from 'enzyme';

import { Composite, mapDispatchToProps } from '../index';

describe('<Composite />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<Composite />);
    expect(renderedComponent.contains(<p>Net Salaries: $27000</p>)).toEqual(
      true,
    );
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
