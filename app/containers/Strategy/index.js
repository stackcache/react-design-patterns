/**
 *
 * Strategy
 *
 * Real World Example
 *
 * Consider the example of sorting, we implemented bubble sort,
 * but the data started to grow and bubble sort started getting
 * very slow. In order to tackle this we implemented Quick sort.
 * But now although the quick sort algorithm was doing better for
 * large datasets, it was very slow for smaller datasets. In order
 * to handle this we implemented a strategy where for small datasets,
 * bubble sort will be used and for larger, quick sort.
 *
 * In plain words
 *
 * Strategy pattern allows you to switch the algorithm or strategy
 * based upon the situation.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Sorter,
  BubbleSortStrategy,
  QuickSortStrategy,
} from '../../components/SortStrategy';
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class Strategy extends React.PureComponent {
  render() {
    const dataset = [1, 5, 4, 3, 2, 8];

    let sorter = new Sorter(new BubbleSortStrategy());
    const large = sorter.sort(dataset); // Output : Sorting using bubble sort

    sorter = new Sorter(new QuickSortStrategy());
    const small = sorter.sort(dataset); // Output : Sorting using quick sort
    return (
      <div>
        <div className="header">Strategy</div>
        <div className="instructions">Think on your feet</div>
        <p className="subtitle">Large dataset: {large.message}</p>
        <p className="subtitle">Small dataset: {small.message}</p>
      </div>
    );
  }
}

Strategy.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Strategy);
