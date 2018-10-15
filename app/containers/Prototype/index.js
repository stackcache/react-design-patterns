/**
 *
 * Prototype
 *
 * Real World Examples
 *
 * Remember dolly? The sheep that was cloned! Lets not
 * get into the details but the key point here is that
 * it is all about cloning
 *
 * In plain words
 *
 * Create object based on an existing object through cloning.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Sheep from '../../components/Sheep';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Prototype extends React.PureComponent {
  constructor() {
    super();
    this.getSheepCode = this.getSheepCode.bind(this);
    this.getCloneCode = this.getCloneCode.bind(this);
  }

  getSheepCode() {
    return `
    class Sheep {
      constructor(name, category) {
        this.name = name;
        this.category = category || 'Mountain Sheep';
      }
    }`;
  }

  getCloneCode() {
    return `
    const orig = new Sheep('Stack', 'Field Sheep');
    const clone = Object.assign({}, orig); // clone of original sheep
    clone.name = 'Cache';

    <div>Original</div>
    <p>
      {orig.name}, {orig.category}
    </p>
    <div>Clone</div>
    <p>
      {clone.name}, {clone.category}
    </p>
    `;
  }

  render() {
    const orig = new Sheep('Stack', 'Field Sheep');
    const clone = Object.assign({}, orig); // clone of original sheep
    clone.name = 'Cache';

    return (
      <div>
        <HomeBtn />
        <div className="header">Prototype</div>
        <div className="subtitle">
          Prototypes are all about creating objects based on existing objects.
          We will demonstrate this by cloning a sheep. This is our Sheep class.
        </div>
        <DpHighlighter code={this.getSheepCode()} />
        <div className="subtitle">
          We will clone the object and change the name. The category should
          still match the original object.
        </div>
        <DpHighlighter code={this.getCloneCode()} />
        <div className="subtitle head">Original</div>
        <p className="subtitle">
          {orig.name}, {orig.category}
        </p>
        <div className="subtitle head">Clone</div>
        <p className="subtitle">
          {clone.name}, {clone.category}
        </p>
      </div>
    );
  }
}

Prototype.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Prototype);
