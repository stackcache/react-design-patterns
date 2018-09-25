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
}

Sheep.propTypes = {};

export default Sheep;
