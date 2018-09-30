import DoorFittingExpert from '../index';

describe('<DoorFittingExpert />', () => {
  it('should yield a function', () => {
    const dfe = new DoorFittingExpert();
    expect(dfe.getDescription).toBeInstanceOf(Function);
  });
});
