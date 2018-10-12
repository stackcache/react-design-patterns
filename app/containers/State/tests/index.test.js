import React from 'react';
import { shallow } from 'enzyme';

import { State, mapDispatchToProps } from '../index';

describe('<State />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<State />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">Upper: SECOND LINE</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
