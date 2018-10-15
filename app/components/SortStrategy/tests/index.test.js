import SortStrategy, { BubbleSortStrategy } from '../index';

describe('<SortStrategy />', () => {
  it('Expect sort strategy to have a sort function', () => {
    const ss = new SortStrategy(new BubbleSortStrategy());
    expect(ss.sort).toBeInstanceOf(Function);
  });
});
