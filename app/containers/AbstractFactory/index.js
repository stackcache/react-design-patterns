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
import { compose } from 'redux';

import Welder from '../../components/Welder';
import Carpenter from '../../components/Carpenter';
import { IronDoor, WoodenDoor } from '../../components/Door';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

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
  constructor() {
    super();
    this.getDoorFactoryCode = this.getDoorFactoryCode.bind(this);
    this.getDoorExpertCode = this.getDoorExpertCode.bind(this);
    this.getDoorTypeFactoryCode = this.getDoorTypeFactoryCode.bind(this);
    this.getImplementationCode = this.getImplementationCode.bind(this);
  }

  getDoorFactoryCode() {
    return `
    class DoorFactory {
      constructor() {
        this.makeDoor = () => {};
        this.makeFittingExpert = () => {};
      }
    }`;
  }

  getDoorExpertCode() {
    return `
    class DoorFittingExpert {
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
    }`;
  }

  getDoorTypeFactoryCode() {
    return `
    // Wooden factory to return wooden door and the relevant expert
    class WoodenDoorFactory extends DoorFactory {
      constructor() {
        super();
        this.makeDoor = () => new WoodenDoor();
        this.makeFittingExpert = () => new Carpenter();
      }
    }

    // Iron door factory to get iron door and the relevant expert
    class IronDoorFactory extends DoorFactory {
      constructor() {
        super();
        this.makeDoor = () => new IronDoor();
        this.makeFittingExpert = () => new Welder();
      }
    }`;
  }

  getImplementationCode() {
    return `
    const woodFactory = new WoodenDoorFactory();
    const woodDoor = woodFactory.makeDoor().getDescription();
    const woodExpert = woodFactory.makeFittingExpert().getDescription();

    const ironFactory = new IronDoorFactory();
    const ironDoor = ironFactory.makeDoor().getDescription();
    const ironExpert = ironFactory.makeFittingExpert().getDescription();

    <p className="subtitle">Door: {woodDoor}</p>
    <p className="subtitle">Expert: {woodExpert}</p>

    <p className="subtitle">Door: {ironDoor}</p>
    <p className="subtitle">Expert: {ironExpert}</p>
    `;
  }

  render() {
    const woodFactory = new WoodenDoorFactory();
    const woodDoor = woodFactory.makeDoor().getDescription();
    const woodExpert = woodFactory.makeFittingExpert().getDescription();

    const ironFactory = new IronDoorFactory();
    const ironDoor = ironFactory.makeDoor().getDescription();
    const ironExpert = ironFactory.makeFittingExpert().getDescription();

    return (
      <div>
        <HomeBtn />
        <div className="header">Abstract Factory</div>
        <div className="instructions">Making doors</div>
        <p className="subtitle">
          Say we want to create a door factory. In this case, each door needs to
          create a different type of door experts depending on the material. In
          essence, we need a factory of factories. Our base door factory looks
          like this...
        </p>
        <DpHighlighter code={this.getDoorFactoryCode()} />
        <p className="subtitle">
          Now we need to create our experts for each door.
        </p>
        <DpHighlighter code={this.getDoorExpertCode()} />
        <p className="subtitle">
          From here, we will create a factory for each door type, which will
          invoke the two factories that we have already defined.
        </p>
        <DpHighlighter code={this.getDoorTypeFactoryCode()} />
        <p className="subtitle">
          Now we can create two types of door factories, and each factory will
          implement the factories it needs to create the proper door.
        </p>
        <DpHighlighter code={this.getImplementationCode()} />
        <p className="subtitle">Door: {woodDoor}</p>
        <p className="subtitle">Expert: {woodExpert}</p>
        <br />
        <p className="subtitle">Door: {ironDoor}</p>
        <p className="subtitle">Expert: {ironExpert}</p>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AbstractFactory);
