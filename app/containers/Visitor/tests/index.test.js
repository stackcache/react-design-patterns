import React from 'react';
import { shallow } from 'enzyme';

import { Visitor, mapDispatchToProps } from '../index';

describe('<Visitor />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Visitor />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">jumped 20 feet high into a tree!</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
