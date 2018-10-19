/**
 *
 * Sheep
 *
 */

/* eslint-disable react/prefer-stateless-function */
class Sheep {
  constructor(name, category) {
    this.name = name;
    this.category = category || 'Mountain Sheep';
  }
}

Sheep.propTypes = {};

export default Sheep;
