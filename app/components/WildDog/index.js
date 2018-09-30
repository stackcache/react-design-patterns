/**
 *
 * WildDog
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class WildDog extends React.PureComponent {
  constructor() {
    super();
    this.bark = () => 'wild dog bark!';
  }
}

WildDog.propTypes = {};

export default WildDog;
