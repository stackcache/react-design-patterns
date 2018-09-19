import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the abstractFactory state domain
 */

const selectAbstractFactoryDomain = state =>
  state.get('abstractFactory', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AbstractFactory
 */

const makeSelectAbstractFactory = () =>
  createSelector(selectAbstractFactoryDomain, substate => substate.toJS());

export default makeSelectAbstractFactory;
export { selectAbstractFactoryDomain };
