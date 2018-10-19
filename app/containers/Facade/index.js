/**
 *
 * Facade
 *
 * Real World Example
 *
 * How do you turn on the computer? "Hit the power button"
 * you say! That is what you believe because you are using
 * a simple interface that computer provides on the outside,
 * internally it has to do a lot of stuff to make it happen.
 * This simple interface to the complex subsystem is a facade.
 *
 * In plain words
 *
 * Facade pattern provides a simplified interface to a complex subsystem.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Computer, { ComputerFacade } from '../../components/Computer';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Facade extends React.PureComponent {
  constructor() {
    super();
    this.getComputerCode = this.getComputerCode.bind(this);
    this.getFacadeCode = this.getFacadeCode.bind(this);
    this.getPowerCode = this.getPowerCode.bind(this);
  }

  getComputerCode() {
    return `
    class Computer {
      constructor() {
        this.getElectricShock = () => 'ouch! ';
        this.makeSound = () => 'beep beep! ';
        this.showLoadingScreen = () => 'loading... ';
        this.bam = () => 'ready! ';
        this.closeEverything = () => 'bup bup bup buzz! ';
        this.sooth = () => 'zzzzz! ';
        this.pullCurrent = () => 'haaah! ';
      }
    }`;
  }

  getFacadeCode() {
    return `
    class ComputerFacade {
      constructor(computer) {
        this.computer = computer;
    
        this.turnOn = () => {
          let message = '';
    
          message += this.computer.getElectricShock();
          message += this.computer.makeSound();
          message += this.computer.showLoadingScreen();
          message += this.computer.bam();
    
          return message;
        };
    
        this.turnOff = () => {
          let message = '';
    
          message += this.computer.closeEverything();
          message += this.computer.pullCurrent();
          message += this.computer.sooth();
    
          return message;
        };
      }
    }`;
  }

  getPowerCode() {
    return `
    const computer = new ComputerFacade(new Computer());

    <p className="subtitle">Turn on: {computer.turnOn()}</p>
    <p className="subtitle">Turn off: {computer.turnOff()}</p>
    `;
  }

  render() {
    const computer = new ComputerFacade(new Computer());

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Decorator', url: 'decorator' }}
          next={{ name: 'Flyweight', url: 'flyweight' }}
        />
        <div className="header">Facade</div>
        <div className="instructions">Seems simple enough</div>
        <p className="subtitle">
          The Facade pattern can make complex tasks seem really easy by
          providing a simple interface. For example, pressing the power button
          on a computer. Lets start with a Computer class.
        </p>
        <DpHighlighter code={this.getComputerCode()} />
        <p className="subtitle">
          As an end user, we should not be concerned with which of these methods
          makes the computer power up correctly. We just want to press the
          button and remain in ignorant bliss. This is where our facade comes in
          to save the day.
        </p>
        <DpHighlighter code={this.getFacadeCode()} />
        <p className="subtitle">
          Our facade will take a computer as a parameter and create the
          appropriate methods that we expect to use. The facade will handle the
          order in which the methods are called for us. Now we should be able to
          create a computer facade and turn the computer on and off.
        </p>
        <DpHighlighter code={this.getPowerCode()} />
        <p className="subtitle">Turn on: {computer.turnOn()}</p>
        <p className="subtitle">Turn off: {computer.turnOff()}</p>
      </div>
    );
  }
}

Facade.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Facade);
