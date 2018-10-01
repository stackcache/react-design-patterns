/**
 *
 * Computer
 *
 */

import React from 'react';

/* eslint-disable react/prefer-stateless-function */
class Computer extends React.PureComponent {
  constructor() {
    super();
    this.getElectricShock = () => 'ouch! ';
    this.makeSound = () => 'beep beep! ';
    this.showLoadingScreen = () => 'loading... ';
    this.bam = () => 'ready! ';
    this.closeEverything = () => 'bup bup bup buzz! ';
    this.sooth = () => 'zzzzz! ';
    this.pullCurrent = () => 'haaah! ';
  }
}

export class ComputerFacade {
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
}

Computer.propTypes = {};

export default Computer;
