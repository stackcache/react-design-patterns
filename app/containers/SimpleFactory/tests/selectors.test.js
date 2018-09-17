import { fromJS } from 'immutable';
import makeSelectSimpleFactory, {
  selectSimpleFactoryDomain,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectSimpleFactoryDomain', () => {
  it('should be a function', () => {
    expect(selectSimpleFactoryDomain).toBeInstanceOf(Function);
  });

  it('should be able to create a factory', () => {
    const state = fromJS({
      simpleFactory: initialState,
    });

    const creator = makeSelectSimpleFactory();
    expect(creator(state)).toEqual({});
  });

  it('should return the state', () => {
    const state = fromJS({
      simpleFactory: initialState,
    });

    expect(selectSimpleFactoryDomain(state)).toEqual(
      state.get('simpleFactory'),
    );
  });
});
