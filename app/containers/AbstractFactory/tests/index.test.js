import React from 'react';
import { shallow } from 'enzyme';

import {
  AbstractFactory,
  DoorFactory,
  DoorFittingExpert,
  mapDispatchToProps,
} from '../index';

import Door from '../../../components/Door';

describe('<AbstractFactory />', () => {
  it('should render the component correctly', () => {
    const renderedComponent = shallow(<AbstractFactory />);
    expect(renderedComponent.contains(<p>Door: I am a wooden door</p>)).toEqual(
      true,
    );

    expect(
      renderedComponent.contains(<p>Expert: I can only fit wooden doors</p>),
    ).toEqual(true);

    expect(renderedComponent.contains(<p>Door: I am an iron door</p>)).toEqual(
      true,
    );

    expect(
      renderedComponent.contains(<p>Expert: I can only fit iron doors</p>),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });

  it('should be able to create a DoorFactory', () => {
    const doorFactory = new DoorFactory();
    const door = new Door();
    const carpenter = new DoorFittingExpert();

    expect(doorFactory.makeDoor()).toBe(undefined);
    expect(doorFactory.makeFittingExpert()).toBe(undefined);
    expect(door.getDescription()).toBe(undefined);
    expect(carpenter.getDescription()).toBe(undefined);
  });
});
