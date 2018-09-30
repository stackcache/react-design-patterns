/**
 *
 * Hunter
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Hunter extends React.PureComponent {
  constructor() {
    super();
    this.hunt = lion => lion.roar();
  }
}

Hunter.propTypes = {};

export default Hunter;
