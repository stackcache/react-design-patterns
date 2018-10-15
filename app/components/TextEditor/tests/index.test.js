import { UpperCase } from '../index';

describe('<TextEditor />', () => {
  it('Expect to have unit tests specified', () => {
    const upper = new UpperCase();
    expect(upper.write).toBeInstanceOf(Function);
  });
});
