import AfricanLion from '../index';

describe('<AfricanLion />', () => {
  it('Expect african lion to roar', () => {
    const afLion = new AfricanLion();
    expect(afLion.roar()).toEqual('african lion roar!');
  });
});
