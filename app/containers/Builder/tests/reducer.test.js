// import { fromJS } from 'immutable';
import builderReducer from '../reducer';
import { DEFAULT_ACTION } from '../constants';

describe('builderReducer', () => {
  it('returns the initial state', () => {
    expect(builderReducer(undefined, {})).toMatchSnapshot();
  });

  it('returns the state when DEFAULT_ACTION is passed', () => {
    const action = {
      type: DEFAULT_ACTION,
    };

    expect(builderReducer({}, action)).toMatchSnapshot();
  });
});
