import { fromJS } from 'immutable';
import simpleFactoryReducer from '../reducer';

describe('simpleFactoryReducer', () => {
  it('returns the initial state', () => {
    expect(simpleFactoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
