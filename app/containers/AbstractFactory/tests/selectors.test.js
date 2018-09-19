import { fromJS } from 'immutable';
import makeSelectAbstractFactory, {
  selectAbstractFactoryDomain,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectAbstractFactoryDomain', () => {
  it('should be a function', () => {
    expect(selectAbstractFactoryDomain).toBeInstanceOf(Function);
  });

  it('should be able to create a factory', () => {
    const state = fromJS({
      abstractFactory: initialState,
    });

    const creator = makeSelectAbstractFactory();
    expect(creator(state)).toEqual({});
  });

  it('should return the state', () => {
    const state = fromJS({
      abstractFactory: initialState,
    });

    expect(selectAbstractFactoryDomain(state)).toEqual(
      state.get('abstractFactory'),
    );
  });
});
