/**
 *
 * WebPage
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class WebPage extends React.PureComponent {
  constructor() {
    super();
    this.getContent = () => {};
  }
}

export class About extends WebPage {
  constructor(theme) {
    super();
    this.theme = theme;
    this.getContent = () => `About page in ${this.theme.getColor()}`;
  }
}

export class Careers extends WebPage {
  constructor(theme) {
    super();
    this.theme = theme;
    this.getContent = () => `Careers page in ${this.theme.getColor()}`;
  }
}

WebPage.propTypes = {};

export default WebPage;
