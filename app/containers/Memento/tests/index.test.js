import React from 'react';
import { shallow } from 'enzyme';

import { Memento, mapDispatchToProps } from '../index';

describe('<Memento />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Memento />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">
          Restored Text: This is the first sentence. This is second. And this is
          third.
        </p>,
      ),
    ).toEqual(false);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
