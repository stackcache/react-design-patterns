import { Tiger } from '..';

describe('<Animal />', () => {
  it('Expect to animal to have an accept function', () => {
    const tiger = new Tiger();
    expect(tiger.accept).toBeInstanceOf(Function);
  });
});
