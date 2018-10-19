/**
 *
 * Bulb
 *
 */

/* eslint-disable react/prefer-stateless-function */
class Bulb {
  constructor() {
    this.turnOn = () => 'Bulb has been lit';
    this.turnOff = () => 'Darkness!';
  }
}

class Commander {
  constructor() {
    this.execute = null;
    this.undo = null;
    this.redo = null;
  }
}

// Command
export class TurnOn extends Commander {
  constructor(bulb) {
    super();
    this.bulb = bulb;
    this.execute = () => this.bulb.turnOn();
    this.undo = () => this.bulb.turnOff();
    this.redo = () => this.execute();
  }
}

export class TurnOff extends Commander {
  constructor(bulb) {
    super();
    this.bulb = bulb;
    this.execute = () => this.bulb.turnOff();
    this.undo = () => this.bulb.turnOn();
    this.redo = () => this.execute();
  }
}

// Invoker
export class RemoteControl {
  constructor() {
    this.submit = command => command.execute();
    this.undo = command => command.undo();
    this.redo = command => command.redo();
  }
}

Bulb.propTypes = {};

export default Bulb;
