/**
 *
 * AbstractFactory
 *
 * Real World Example
 *
 * Extending our door example from Simple Factory.
 * Based on your needs you might get a wooden door
 * from a wooden door shop, iron door from an iron
 * shop or a PVC door from the relevant shop. Plus
 * you might need a guy with different kind of specialities
 * to fit the door, for example a carpenter for wooden door,
 * welder for iron door etc. As you can see there is a
 * dependency between the doors now, wooden door needs
 * carpenter, iron door needs a welder etc.
 *
 * In plain words
 *
 * A factory of factories; a factory that groups the
 * individual but related/dependent factories together
 * without specifying their concrete classes.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectAbstractFactory from './selectors';
import reducer from './reducer';

export class Door {
  constructor() {
    this.getDescription = () => {};
  }
}

class WoodenDoor extends Door {
  constructor() {
    super();
    this.getDescription = () => 'I am a wooden door';
  }
}

class IronDoor extends Door {
  constructor() {
    super();
    this.getDescription = () => 'I am an iron door';
  }
}

// fitting experts for each door type

export class DoorFittingExpert {
  constructor() {
    this.getDescription = () => {};
  }
}

class Welder extends DoorFittingExpert {
  constructor() {
    super();
    this.getDescription = () => 'I can only fit iron doors';
  }
}

class Carpenter extends DoorFittingExpert {
  constructor() {
    super();
    this.getDescription = () => 'I can only fit wooden doors';
  }
}

/**
 * Now we have our abstract factory that would
 * let us make family of related objects i.e. wooden
 * door factory would create a wooden door and wooden
 * door fitting expert and iron door factory would
 * create an iron door and iron door fitting expert
 */

export class DoorFactory {
  constructor() {
    this.makeDoor = () => {};
    this.makeFittingExpert = () => {};
  }
}

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory extends DoorFactory {
  constructor() {
    super();
    this.makeDoor = () => new WoodenDoor();
    this.makeFittingExpert = () => new Carpenter();
  }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory extends DoorFactory {
  constructor() {
    super();
    this.makeDoor = () => new IronDoor();
    this.makeFittingExpert = () => new Welder();
  }
}

/* eslint-disable react/prefer-stateless-function */
export class AbstractFactory extends React.PureComponent {
  render() {
    const woodFactory = new WoodenDoorFactory();
    const woodDoor = woodFactory.makeDoor().getDescription();
    const woodExpert = woodFactory.makeFittingExpert().getDescription();

    const ironFactory = new IronDoorFactory();
    const ironDoor = ironFactory.makeDoor().getDescription();
    const ironExpert = ironFactory.makeFittingExpert().getDescription();

    return (
      <div>
        <h1>Abstract Factory</h1>
        <p>Door: {woodDoor}</p>
        <p>Expert: {woodExpert}</p>
        <br />
        <p>Door: {ironDoor}</p>
        <p>Expert: {ironExpert}</p>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  abstractfactory: makeSelectAbstractFactory(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'abstractFactory', reducer });

export default compose(
  withReducer,
  withConnect,
)(AbstractFactory);
