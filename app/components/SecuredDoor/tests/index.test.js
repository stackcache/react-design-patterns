// import React from 'react';
// import { shallow } from 'enzyme';

import SecuredDoor from '../index';
import { LabDoor } from '../../Door';

describe('<SecuredDoor />', () => {
  it('should not open without the correct password', () => {
    const door = new LabDoor();
    const sDoor = new SecuredDoor(door);

    expect(sDoor.open('test')).toEqual(
      'You are not authorized to open this door.',
    );
  });

  it('should open with the correct password', () => {
    const door = new LabDoor();
    const sDoor = new SecuredDoor(door);

    expect(sDoor.open('$ecr3t')).toEqual('Opening lab door');
  });
});
