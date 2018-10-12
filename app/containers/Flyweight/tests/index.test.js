import React from 'react';
import { shallow } from 'enzyme';

import { Flyweight, mapDispatchToProps } from '../index';

describe('<Flyweight />', () => {
  it('expect flyweight to render', () => {
    const renderedComponent = shallow(<Flyweight />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">Serving tea to table# 1</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
