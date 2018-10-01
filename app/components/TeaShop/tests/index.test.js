// import React from 'react';
// import { shallow } from 'enzyme';

import TeaShop, { TeaMaker } from '../index';

describe('<TeaShop />', () => {
  it('Expect tea shop to be able to take orders', () => {
    const teaMaker = new TeaMaker();
    const shop = new TeaShop(teaMaker);
    expect(shop.takeOrder).toBeInstanceOf(Function);
  });
});
