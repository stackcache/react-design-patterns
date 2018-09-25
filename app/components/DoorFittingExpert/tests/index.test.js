import DoorFittingExpert from '../index';

describe('<DoorFittingExpert />', () => {
  it('should render', () => {
    const dfe = new DoorFittingExpert();
    expect(dfe.getDescription).toBeInstanceOf(Function);
  });
});
