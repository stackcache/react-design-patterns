/**
 *
 * IronDoor
 *
 */

import Door from '../Door';

/* eslint-disable react/prefer-stateless-function */
class IronDoor extends Door {
  constructor() {
    super();
    this.getDescription = () => 'I am an iron door';
  }
}

IronDoor.propTypes = {};

export default IronDoor;
