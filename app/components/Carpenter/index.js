/**
 *
 * Carpenter
 *
 */

import DoorFittingExpert from '../DoorFittingExpert';

/* eslint-disable react/prefer-stateless-function */
class Carpenter extends DoorFittingExpert {
  constructor() {
    super();
    this.getDescription = () => 'I can only fit wooden doors';
  }
}

Carpenter.propTypes = {};

export default Carpenter;
