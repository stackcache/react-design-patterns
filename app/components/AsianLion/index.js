/**
 *
 * AsianLion
 *
 */

import Lion from '../Lion';

/* eslint-disable react/prefer-stateless-function */
class AsianLion extends Lion {
  constructor() {
    super();
    this.roar = () => 'asian lion roar!';
  }
}

AsianLion.propTypes = {};

export default AsianLion;
