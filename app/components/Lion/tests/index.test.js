import Lion from '../index';

describe('<Lion />', () => {
  it('Expect lion to have a roar', () => {
    const lion = new Lion();
    expect(lion.roar).toBeInstanceOf(Function);
    expect(lion.roar()).toEqual(undefined);
  });
});
