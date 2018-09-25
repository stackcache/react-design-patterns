/**
 *
 * Welder
 *
 */

import DoorFittingExpert from '../DoorFittingExpert';

/* eslint-disable react/prefer-stateless-function */
class Welder extends DoorFittingExpert {
  constructor() {
    super();
    this.getDescription = () => 'I can only fit iron doors';
  }
}

Welder.propTypes = {};

export default Welder;
