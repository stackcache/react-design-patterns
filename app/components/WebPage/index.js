/**
 *
 * WebPage
 *
 */

/* eslint-disable react/prefer-stateless-function */
class WebPage {
  constructor() {
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
