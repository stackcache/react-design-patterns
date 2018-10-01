import React from 'react';
import { shallow } from 'enzyme';
import { mapDispatchToProps, Facade } from '../index';
import Computer, { ComputerFacade } from '../../../components/Computer';

describe('<Facade />', () => {
  it('expect facade to render', () => {
    const renderedComponent = shallow(<Facade />);
    expect(
      renderedComponent.contains(
        <p>Turn on: ouch! beep beep! loading... ready! </p>,
      ),
    ).toEqual(true);
  });

  it('expect facade to function', () => {
    const computer = new ComputerFacade(new Computer());
    expect(computer.turnOn()).toEqual('ouch! beep beep! loading... ready! ');
    expect(computer.turnOff()).toEqual('bup bup bup buzz! haaah! zzzzz! ');
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
