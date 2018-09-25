import Welder from '../index';

describe('<Welder />', () => {
  it('should render', () => {
    const welder = new Welder();
    expect(welder.getDescription()).toEqual('I can only fit iron doors');
  });
});
