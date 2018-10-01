import Lion, { AsianLion, AfricanLion } from '../index';

describe('<Lion />', () => {
  it('Expect lion to have a roar', () => {
    const lion = new Lion();
    expect(lion.roar).toBeInstanceOf(Function);
    expect(lion.roar()).toEqual(undefined);
  });

  it('Expect asian lion to roar', () => {
    const asLion = new AsianLion();
    expect(asLion.roar()).toEqual('asian lion roar!');
  });

  it('Expect african lion to roar', () => {
    const afLion = new AfricanLion();
    expect(afLion.roar()).toEqual('african lion roar!');
  });
});
