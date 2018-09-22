import Door from '../index';

describe('<Door />', () => {
  it('should render', () => {
    const door = new Door();
    expect(door.getDescription).toBeInstanceOf(Function);
  });
});
