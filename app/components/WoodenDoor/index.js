/**
 *
 * WoodenDoor
 *
 */

import Door from '../Door';

/* eslint-disable react/prefer-stateless-function */
class WoodenDoor extends Door {
  constructor() {
    super();
    this.getDescription = () => 'I am a wooden door';
  }
}

WoodenDoor.propTypes = {};

export default WoodenDoor;
