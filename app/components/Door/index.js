/**
 *
 * Door
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Door extends React.PureComponent {
  constructor() {
    super();
    this.getDescription = () => {};
    this.open = () => {};
    this.close = () => {};
  }
}
export class IronDoor extends Door {
  constructor() {
    super();
    this.getDescription = () => 'I am an iron door';
  }
}
export class WoodenDoor extends Door {
  constructor() {
    super();
    this.getDescription = () => 'I am a wooden door';
  }
}

export class LabDoor extends Door {
  constructor() {
    super();
    this.open = () => 'Opening lab door';
    this.close = () => 'Closing the lab door';
  }
}

Door.propTypes = {};

export default Door;
