import { fromJS } from 'immutable';
import makeSelectBuilder, { selectBuilderDomain } from '../selectors';
import { initialState } from '../reducer';

describe('selectBuilderDomain', () => {
  it('should be a function', () => {
    expect(selectBuilderDomain).toBeInstanceOf(Function);
  });

  it('should be able to create a factory', () => {
    const state = fromJS({
      factoryMethod: initialState,
    });

    const creator = makeSelectBuilder();
    expect(creator(state)).toEqual({});
  });

  it('should return the state', () => {
    const state = fromJS({
      builder: initialState,
    });

    expect(selectBuilderDomain(state)).toEqual(state.get('builder'));
  });
});
