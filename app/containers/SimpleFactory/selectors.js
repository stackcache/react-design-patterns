import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the simpleFactory state domain
 */

const selectSimpleFactoryDomain = state =>
  state.get('simpleFactory', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SimpleFactory
 */

const makeSelectSimpleFactory = () =>
  createSelector(selectSimpleFactoryDomain, substate => substate.toJS());

export default makeSelectSimpleFactory;
export { selectSimpleFactoryDomain };
