import ChatRoom, { User } from '../index';

describe('<ChatRoom />', () => {
  it('Expect to have unit tests specified', () => {
    const mediator = new ChatRoom();
    const jay = new User('Jay', mediator);
    expect(jay.send('Hey!')).toEqual('[Jay]: Hey!');
  });
});
