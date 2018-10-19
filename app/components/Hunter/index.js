/**
 *
 * Hunter
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Hunter extends React.PureComponent {
  constructor() {
    super();
    this.hunt = lion => lion.roar();
  }
}

Hunter.propTypes = {};

export default Hunter;
