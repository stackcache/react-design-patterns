import IronDoor from '../index';

describe('<IronDoor />', () => {
  it('should render', () => {
    const iDoor = new IronDoor();
    expect(iDoor.getDescription()).toEqual('I am an iron door');
  });
});
