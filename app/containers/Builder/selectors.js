import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the builder state domain
 */

const selectBuilderDomain = state => state.get('builder', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Builder
 */

const makeSelectBuilder = () =>
  createSelector(selectBuilderDomain, substate => substate.toJS());

export default makeSelectBuilder;
export { selectBuilderDomain };
