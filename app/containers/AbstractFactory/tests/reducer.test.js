// import { fromJS } from 'immutable';
import abstractFactoryReducer from '../reducer';
import { DEFAULT_ACTION } from '../constants';

describe('abstractFactoryReducer', () => {
  it('returns the initial state', () => {
    expect(abstractFactoryReducer(undefined, {})).toMatchSnapshot();
  });

  it('returns the state when DEFAULT_ACTION is passed', () => {
    const action = {
      type: DEFAULT_ACTION,
    };

    expect(abstractFactoryReducer({}, action)).toMatchSnapshot();
  });
});
