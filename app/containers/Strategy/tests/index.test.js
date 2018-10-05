import React from 'react';
import { shallow } from 'enzyme';

import { Strategy, mapDispatchToProps } from '../index';

describe('<Strategy />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Strategy />);
    expect(
      renderedComponent.contains(
        <p>Large dataset: Sorting using bubble sort</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
