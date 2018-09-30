import AsianLion from '../index';

describe('<AsianLion />', () => {
  it('Expect asian lion to roar', () => {
    const asLion = new AsianLion();
    expect(asLion.roar()).toEqual('asian lion roar!');
  });
});
