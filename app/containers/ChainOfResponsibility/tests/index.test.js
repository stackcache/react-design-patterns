import React from 'react';
import { shallow } from 'enzyme';

import { ChainOfResponsibility, mapDispatchToProps } from '../index';

describe('<ChainOfResponsibility />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<ChainOfResponsibility />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">Paid 259 using Bitcoin</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
