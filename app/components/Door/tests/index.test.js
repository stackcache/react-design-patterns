import Door, { IronDoor, WoodenDoor } from '../index';

describe('<Door />', () => {
  it('should render', () => {
    const door = new Door();
    expect(door.getDescription).toBeInstanceOf(Function);
    expect(door.open()).toEqual(undefined);
    expect(door.close()).toEqual(undefined);
  });

  it('should render an iron door', () => {
    const iDoor = new IronDoor();
    expect(iDoor.getDescription()).toEqual('I am an iron door');
  });

  it('should render', () => {
    const wDoor = new WoodenDoor();
    expect(wDoor.getDescription()).toEqual('I am a wooden door');
  });
});
