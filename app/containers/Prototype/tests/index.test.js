import React from 'react';
import { shallow } from 'enzyme';

import { Prototype, mapDispatchToProps } from '../index';
import Sheep from '../../../components/Sheep';

describe('<Prototype />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<Prototype />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">Stack, Field Sheep</p>,
      ),
    ).toEqual(true);

    expect(
      renderedComponent.contains(
        <p className="subtitle">Cache, Field Sheep</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });

  it('should be able to create a clone of an object', () => {
    const sheep1 = new Sheep('Jim');
    const sheep2 = Object.assign({}, sheep1);
    sheep2.name = 'Bob';

    expect(sheep2.category).toEqual(sheep1.category);
    expect(sheep2.name).toEqual('Bob');
  });
});
