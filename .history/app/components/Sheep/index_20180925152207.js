/**
 *
 * Sheep
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Sheep extends React.PureComponent {
  constructor(name, category) {
    super();
    this.name = name;
    this.category = category || 'Mountain Sheep';
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

  get category() {
    return this.category;
  }

  set category(category) {
    this.category = category;
  }

  render() {
    return <div />;
  }
}

Sheep.propTypes = {};

export default Sheep;
