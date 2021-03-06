/**
 *
 * Theme
 *
 */

/* eslint-disable react/prefer-stateless-function */
class Theme {
  constructor() {
    this.getColor = () => {};
  }
}

export class DarkTheme extends Theme {
  constructor() {
    super();
    this.getColor = () => 'Dark Black';
  }
}

export class LightTheme extends Theme {
  constructor() {
    super();
    this.getColor = () => 'Off White';
  }
}

export class AquaTheme extends Theme {
  constructor() {
    super();
    this.getColor = () => 'Light Blue';
  }
}

Theme.propTypes = {};

export default Theme;
