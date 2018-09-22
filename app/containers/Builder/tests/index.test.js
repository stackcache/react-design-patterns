import React from 'react';
import { shallow } from 'enzyme';
import { Builder, Burger, BurgerBuilder, mapDispatchToProps } from '../index';

describe('<Builder />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Builder />);
    expect(renderedComponent.contains(<h2>Burger #14</h2>)).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });

  it('should create new Burgers', () => {
    const burger = new BurgerBuilder(10)
      .addCheese()
      .addLettuce()
      .addTomato()
      .addPepperoni()
      .build();
    expect(burger.size).toEqual(10);
    expect(burger.cheese).toBeTruthy();
    expect(burger.pepperoni).toBeTruthy();
  });

  it('should handle creating a burger when no builder is passed into the constructor', () => {
    const burger = new Burger();
    expect(burger.cheese).toBeFalsy();
  });
});
