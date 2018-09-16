import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the factoryMethod state domain
 */

const selectFactoryMethodDomain = state =>
  state.get('factoryMethod', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FactoryMethod
 */

const makeSelectFactoryMethod = () =>
  createSelector(selectFactoryMethodDomain, substate => substate.toJS());

export default makeSelectFactoryMethod;
export { selectFactoryMethodDomain };
