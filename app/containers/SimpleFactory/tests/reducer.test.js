// import { fromJS } from 'immutable';
import simpleFactoryReducer from '../reducer';
import { DEFAULT_ACTION } from '../constants';

describe('simpleFactoryReducer', () => {
  it('returns the initial state', () => {
    expect(simpleFactoryReducer(undefined, {})).toMatchSnapshot();
  });

  it('returns the state when DEFAULT_ACTION is passed', () => {
    const action = {
      type: DEFAULT_ACTION,
    };

    expect(simpleFactoryReducer({}, action)).toMatchSnapshot();
  });
});
