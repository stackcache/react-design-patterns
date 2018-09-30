/**
 *
 * AfricanLion
 *
 */

import Lion from '../Lion';

/* eslint-disable react/prefer-stateless-function */
class AfricanLion extends Lion {
  constructor() {
    super();
    this.roar = () => 'african lion roar!';
  }
}

AfricanLion.propTypes = {};

export default AfricanLion;
