import React from 'react';
import { shallow } from 'enzyme';

import { Decorator, mapDispatchToProps } from '../index';

describe('<Decorator />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<Decorator />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">Simple coffee, milk, whip, vanilla: $20</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
