import React from 'react';
import { shallow } from 'enzyme';

import Singleton from '../index';

describe('<Singleton />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Singleton />);

    expect(
      renderedComponent.contains(<p className="subtitle">Barack Obama</p>),
    ).toEqual(true);
  });
});
