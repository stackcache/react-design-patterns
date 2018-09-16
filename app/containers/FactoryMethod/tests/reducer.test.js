import { fromJS } from 'immutable';
import factoryMethodReducer from '../reducer';

describe('factoryMethodReducer', () => {
  it('returns the initial state', () => {
    expect(factoryMethodReducer(undefined, {})).toEqual(fromJS({}));
  });
});
