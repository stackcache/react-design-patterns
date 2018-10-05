/**
 *
 * Animal
 *
 */

/* eslint-disable react/prefer-stateless-function */
// Visitee
class Animal {
  constructor() {
    this.accept = null;
  }
}

// Visitor
class AnimalOperation {
  constructor() {
    this.visitMonkey = null;
    this.visitTiger = null;
    this.visitDolphin = null;
  }
}

export class Monkey extends Animal {
  constructor() {
    super();
    this.shout = () => 'Ooh oo aa aa!';
    this.accept = operation => operation.visitMonkey(this);
  }
}

export class Tiger extends Animal {
  constructor() {
    super();
    this.roar = () => 'Roaaar!';
    this.accept = operation => operation.visitTiger(this);
  }
}

export class Dolphin extends Animal {
  constructor() {
    super();
    this.speak = () => 'eh ehee ehehe ehe!';
    this.accept = operation => operation.visitDolphin(this);
  }
}

class Speak extends AnimalOperation {
  constructor() {
    super();
    this.visitMonkey = monkey => monkey.shout();
    this.visitTiger = tiger => tiger.roar();
    this.visitDolphin = dolphin => dolphin.speak();
  }
}

/**
 * We could have done this simply by having an inheritance
 * hierarchy for the animals but then we would have to modify
 * the animals whenever we would have to add new actions to
 * animals. But now we will not have to change them. For example,
 * let's say we are asked to add the jump behavior to the animals,
 * we can simply add that by creating a new visitor i.e.
 * */

export class Jump extends AnimalOperation {
  constructor() {
    super();
    this.visitMonkey = () => 'jumped 20 feet high into a tree!';
    this.visitTiger = () => 'jumped 7 feet back to the ground!';
    this.visitDolphin = () => 'did a flip out of the water!';
  }
}

export default Speak;
