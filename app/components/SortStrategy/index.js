/**
 *
 * SortStrategy
 *
 */

/* eslint-disable react/prefer-stateless-function */
class SortStrategy {
  constructor() {
    this.sort = null;
  }
}

// First of all we have our strategy interface and different strategy implementations
export class BubbleSortStrategy extends SortStrategy {
  constructor() {
    super();
    this.sort = dataset => {
      // Do sorting
      const sorted = { message: 'Sorting using bubble sort', dataset };
      return sorted;
    };
  }
}

export class QuickSortStrategy extends SortStrategy {
  constructor() {
    super();
    this.sort = dataset => {
      // Do sorting
      const sorted = { message: 'Sorting using quick sort', dataset };
      return sorted;
    };
  }
}

// And then we have our client that is going to use any strategy
export class Sorter {
  constructor(sorter) {
    this.sorter = sorter;
    this.sort = dataset => this.sorter.sort(dataset);
  }
}

export default Sorter;
