// import React from 'react';
// import { shallow } from 'enzyme';

import WildDog from '../index';

describe('<WildDog />', () => {
  it('Expect wild dog to bark', () => {
    const wildDog = new WildDog();
    expect(wildDog.bark()).toEqual('wild dog bark!');
  });
});
