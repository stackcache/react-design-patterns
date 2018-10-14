import React from 'react';
import { shallow } from 'enzyme';

import { Command, mapDispatchToProps } from '../index';

describe('<Command />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Command />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">Turn on: Bulb has been lit</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
