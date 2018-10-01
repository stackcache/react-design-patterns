import Coffee from '../index';

describe('<Coffee />', () => {
  it('should contain the correct functions', () => {
    const coffee = new Coffee();
    expect(coffee.getCost).toBeInstanceOf(Function);
    expect(coffee.getDescription).toBeInstanceOf(Function);
    expect(coffee.getCost()).toEqual(undefined);
    expect(coffee.getDescription()).toEqual(undefined);
  });
});
