/**
 *
 * Flyweight
 *
 * Real world example
 *
 * Did you ever have fresh tea from some stall?
 * They often make more than one cup that you demanded
 * and save the rest for any other customer so to save
 * the resources e.g. gas etc. Flyweight pattern is all
 * about that i.e. sharing.
 *
 * In plain words
 *
 * It is used to minimize memory usage or computational
 * expenses by sharing as much as possible with similar
 * objects.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TeaShop, { TeaMaker } from '../../components/TeaShop';

/* eslint-disable react/prefer-stateless-function */
export class Flyweight extends React.PureComponent {
  render() {
    const teaMaker = new TeaMaker();
    const shop = new TeaShop(teaMaker);
    shop.takeOrder('less sugar', 1);
    shop.takeOrder('more milk', 2);
    shop.takeOrder('less sugar', 4);
    shop.takeOrder('without sugar', 5);
    const orders = shop.serve().map(order => <li>{order}</li>);

    return (
      <div>
        <h1>Flyweight</h1>
        <p>{orders}</p>
      </div>
    );
  }
}

Flyweight.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Flyweight);
