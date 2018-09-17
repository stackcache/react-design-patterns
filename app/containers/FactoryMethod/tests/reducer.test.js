// import { fromJS } from 'immutable';
import factoryMethodReducer from '../reducer';
import { DEFAULT_ACTION } from '../constants';

describe('factoryMethodReducer', () => {
  it('returns the initial state', () => {
    expect(factoryMethodReducer(undefined, {})).toMatchSnapshot();
  });

  it('returns the state when DEFAULT_ACTION is passed', () => {
    const action = {
      type: DEFAULT_ACTION,
    };

    expect(factoryMethodReducer({}, action)).toMatchSnapshot();
  });
});
