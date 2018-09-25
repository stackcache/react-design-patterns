import WoodenDoor from '../index';

describe('<WoodenDoor />', () => {
  it('should render', () => {
    const wDoor = new WoodenDoor();
    expect(wDoor.getDescription()).toEqual('I am a wooden door');
  });
});
