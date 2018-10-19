import React from 'react';
import { shallow } from 'enzyme';
import HomeBtn from '../index';

describe('<HomeBtn />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<HomeBtn />);

    expect(renderedComponent.contains('All Patterns')).toEqual(true);
  });
});
