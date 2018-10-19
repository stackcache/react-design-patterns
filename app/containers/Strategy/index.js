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
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Strategy extends React.PureComponent {
  constructor() {
    super();
    this.getSorterCode = this.getSorterCode.bind(this);
    this.getStrategyCode = this.getStrategyCode.bind(this);
    this.getSortCode = this.getSortCode.bind(this);
  }

  getSorterCode() {
    return `
    export class Sorter {
      constructor(sorter) {
        this.sorter = sorter;
        this.sort = dataset => this.sorter.sort(dataset);
      }
    }
    `;
  }

  getStrategyCode() {
    return `
    class SortStrategy {
      constructor() {
        this.sort = null;
      }
    }
    
    // First of all we have our strategy interface and different strategy implementations
    class BubbleSortStrategy extends SortStrategy {
      constructor() {
        super();
        this.sort = dataset => {
          // Do sorting
          const sorted = { message: 'Sorting using bubble sort', dataset };
          return sorted;
        };
      }
    }
    
    class QuickSortStrategy extends SortStrategy {
      constructor() {
        super();
        this.sort = dataset => {
          // Do sorting
          const sorted = { message: 'Sorting using quick sort', dataset };
          return sorted;
        };
      }
    }
    `;
  }

  getSortCode() {
    return `
    const dataset = [1, 5, 4, 3, 2, 8];

    let sorter = new Sorter(new BubbleSortStrategy());
    const large = sorter.sort(dataset); // Output : Sorting using bubble sort

    sorter = new Sorter(new QuickSortStrategy());
    const small = sorter.sort(dataset); // Output : Sorting using quick sort

    <p>Large dataset: {large.message}</p>
    <p>Small dataset: {small.message}</p>
    `;
  }

  render() {
    const dataset = [1, 5, 4, 3, 2, 8];

    let sorter = new Sorter(new BubbleSortStrategy());
    const large = sorter.sort(dataset); // Output : Sorting using bubble sort

    sorter = new Sorter(new QuickSortStrategy());
    const small = sorter.sort(dataset); // Output : Sorting using quick sort
    return (
      <div>
        <HomeBtn
          previous={{ name: 'Visitor', url: 'visitor' }}
          next={{ name: 'State', url: 'state' }}
        />
        <div className="header">Strategy</div>
        <div className="instructions">Think on your feet</div>
        <p className="subtitle">
          The Strategy pattern is a particularly cool pattern because it gives
          our code some decision-making skills. In this example, we will create
          2 sorting methods, and let our program determine which one to use
          based on the dataset size. First, lets create a Sorter class. We will
          accept a sorter, and then sort the dataset.
        </p>
        <DpHighlighter code={this.getSorterCode()} />
        <p className="subtitle">Next, we will create the sort strategies.</p>
        <DpHighlighter code={this.getStrategyCode()} />
        <p className="subtitle">Now lets see it work in practice.</p>
        <DpHighlighter code={this.getSortCode()} />
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
