/**
 *
 * SecuredDoor
 *
 */

/* eslint-disable react/prefer-stateless-function */
class SecuredDoor {
  constructor(door) {
    this.door = door;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  open(password) {
    if (this.authenticate(password)) {
      return this.door.open();
    }

    return 'You are not authorized to open this door.';
  }

  close() {
    this.door.close();
  }

  authenticate(password) {
    return password === '$ecr3t';
  }
}

SecuredDoor.propTypes = {};

export default SecuredDoor;
