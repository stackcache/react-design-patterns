/**
 *
 * Adapter
 *
 * Real World Example
 *
 * Consider that you have some pictures in your memory card
 * and you need to transfer them to your computer. In order
 * to transfer them you need some kind of adapter that is
 * compatible with your computer ports so that you can attach
 * memory card to your computer. In this case card reader is
 * an adapter. Another example would be the famous power adapter;
 * a three legged plug can't be connected to a two pronged outlet,
 * it needs to use a power adapter that makes it compatible with
 * the two pronged outlet. Yet another example would be a translator
 * translating words spoken by one person to another.
 *
 * In plain words
 *
 * Adapter pattern lets you wrap an otherwise incompatible object
 * in an adapter to make it compatible with another class.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WildDog from '../../components/WildDog';
import Lion from '../../components/Lion';
import Hunter from '../../components/Hunter';

// Adapter around wild dog to make it compatible with our game
export class WildDogAdapter extends Lion {
  constructor(dog) {
    super();
    this.dog = dog;
    this.roar = dog.bark;
  }
}

/* eslint-disable react/prefer-stateless-function */
export class Adapter extends React.PureComponent {
  render() {
    const wildDog = new WildDog();
    const wildDogAdapter = new WildDogAdapter(wildDog);

    const hunter = new Hunter();
    const animalSound = hunter.hunt(wildDogAdapter);

    return (
      <div>
        <h1>Adapter</h1>
        <p>
          The hunter usually hunts lions, but adapts and is hunting a wild dog.
          The wild dog lets out a {animalSound}
        </p>
      </div>
    );
  }
}

Adapter.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Adapter);
