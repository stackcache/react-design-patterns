/**
 *
 * Lion
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Lion extends React.PureComponent {
  constructor() {
    super();
    this.roar = () => {};
  }
}
export class AsianLion extends Lion {
  constructor() {
    super();
    this.roar = () => 'asian lion roar!';
  }
}
export class AfricanLion extends Lion {
  constructor() {
    super();
    this.roar = () => 'african lion roar!';
  }
}

Lion.propTypes = {};

export default Lion;
