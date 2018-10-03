import Bulb, { TurnOn, TurnOff, RemoteControl } from '../index';

describe('<Bulb />', () => {
  it('Expect bulbs to turn on and off', () => {
    const bulb = new Bulb();
    expect(bulb.turnOn()).toEqual('Bulb has been lit');
    expect(bulb.turnOff()).toEqual('Darkness!');
  });

  it('Expect undo and repo to flip bulb state', () => {
    const bulb = new Bulb();
    const turnOn = new TurnOn(bulb);
    const turnOff = new TurnOff(bulb);
    const remote = new RemoteControl();
    expect(remote.undo(turnOn)).toEqual(remote.redo(turnOff));
    expect(remote.undo(turnOff)).toEqual(remote.redo(turnOn));
  });
});
