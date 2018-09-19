import { fromJS } from 'immutable';
import makeSelectFactoryMethod, {
  selectFactoryMethodDomain,
} from '../selectors';
import { initialState } from '../reducer';

describe('selectFactoryMethodDomain', () => {
  it('should be a function', () => {
    expect(selectFactoryMethodDomain).toBeInstanceOf(Function);
  });

  it('should be able to create a factory', () => {
    const state = fromJS({
      factoryMethod: initialState,
    });

    const creator = makeSelectFactoryMethod();
    expect(creator(state)).toEqual({});
  });

  it('should return the state', () => {
    const state = fromJS({
      factoryMethod: initialState,
    });

    expect(selectFactoryMethodDomain(state)).toEqual(
      state.get('factoryMethod'),
    );
  });
});
