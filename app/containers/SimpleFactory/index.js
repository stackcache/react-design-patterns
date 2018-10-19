/**
 *
 * SimpleFactory
 *
 * Real world example
 *
 * Consider, you are building a house and you need doors.
 * It would be a mess if every time you need a door, you put on your
 * carpenter clothes and start making a door in your house. Instead
 * you get it made from a factory.
 *
 * In plain words
 *
 * Simple factory simply generates an instance for client without
 * exposing any instantiation logic to the client
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* This is a Simple Being Factory */
class Being {
  constructor(being) {
    this.canDoAnything = false;

    if (being === 'god') {
      this.canDoAnything = true;
    }
  }
}

/* eslint-disable react/prefer-stateless-function */
export class SimpleFactory extends React.PureComponent {
  constructor() {
    super();
    this.getFactoryCode = this.getFactoryCode.bind(this);
    this.getBeings = this.getBeings.bind(this);
  }

  getFactoryCode() {
    return `
    // This is a Simple Being Factory
    class Being {
      constructor(being) {
        this.canDoAnything = false;
    
        if (being === 'god') {
          this.canDoAnything = true;
        }
      }
    }`;
  }

  getBeings() {
    return `
    const being1 = new Being('man');
    const being2 = new Being('god');

    <div>
      {!being1.canDoAnything && <p>Man cannot do anything</p>}
    </div>
    <div>
      {being2.canDoAnything && <p>Gods can do anything</p>}
    </div>
    `;
  }

  render() {
    const being1 = new Being('man');
    const being2 = new Being('god');

    return (
      <div>
        <HomeBtn next={{ name: 'Factory Method', url: 'factory-method' }} />
        <div className="header">Simple Factory</div>
        <div className="instructions">Men vs. Gods</div>
        <div className="subtitle">
          First, we create a Being factory with properties for different types
          of beings
        </div>
        <DpHighlighter code={this.getFactoryCode()} />
        <div className="subtitle">
          Now we can create two new being instances and output whether or not
          they &quot;can do anything&quot;.
        </div>
        <DpHighlighter code={this.getBeings()} />
        <div className="subtitle">
          {!being1.canDoAnything && <p>Man cannot do anything</p>}
        </div>
        <div className="subtitle">
          {being2.canDoAnything && <p>Gods can do anything</p>}
        </div>
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

export default compose(withConnect)(SimpleFactory);
