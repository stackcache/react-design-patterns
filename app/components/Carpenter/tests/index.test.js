import Carpenter from '../index';

describe('<Carpenter />', () => {
  it('should render', () => {
    const carpenter = new Carpenter();
    expect(carpenter.getDescription()).toEqual('I can only fit wooden doors');
  });
});
