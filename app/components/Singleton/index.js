/**
 *
 * Singleton
 *
 * Real World Example
 *
 * There can only be one president of a country at a time.
 * The same president has to be brought to action, whenever
 * duty calls. President here is singleton.
 *
 * In plain words
 *
 * Ensures that only one object of a particular class is ever created.
 *
 */

import React from 'react';
import '../../containers/HomePage/HomePage.css';
import DpHighlighter from '../DpHighlighter';
import HomeBtn from '../HomeBtn';

class Singleton extends React.PureComponent {
  constructor(props) {
    super(props);
    if (!Singleton.instance) {
      this.data = [];
      Singleton.instance = this;
    }

    this.add = item => {
      this.data.push(item);
    };

    this.get = id => this.data.find(d => d.id === id);

    this.getSingletonCode = this.getSingletonCode.bind(this);
    this.getPresidentCode = this.getPresidentCode.bind(this);

    return Singleton.instance;
  }

  getSingletonCode() {
    return `
    class Singleton {
      constructor() {
        // If an instance exists, return that instance
        // If not, create a new one.
        if (!Singleton.instance) {
          this.data = [];
          Singleton.instance = this;
        }
    
        this.add = item => {
          this.data.push(item);
        };
    
        this.get = id => this.data.find(d => d.id === id);
    
        return Singleton.instance;
      }
    }
    `;
  }

  getPresidentCode() {
    return `
    const President = new Singleton();
    President.add({ id: '44', name: 'Barack Obama' });
    `;
  }

  getNewPresCode() {
    return `
    // attempt to create a new President when one already exists
    const President2 = new Singleton();
    const prev = President2.get('44');

    <div className="subtitle head">President</div>
    <p className="subtitle">{prev.name}</p>
    `;
  }

  render() {
    const President = new Singleton();
    President.add({ id: '44', name: 'Barack Obama' });

    // attempt to create a new President when one already exists
    const President2 = new Singleton();
    const prev = President2.get('44');

    return (
      <div>
        <HomeBtn />
        <div className="header">Singleton</div>
        <div className="instructions">There can only be one...</div>
        <p className="subtitle">
          Unlike the other examples, the magic of this pattern lies in the
          constructor. We will create a Singleton and add methods that give us
          the ability to add and retrieve properties from it, but we cannot
          create more than one.
        </p>
        <DpHighlighter code={this.getSingletonCode()} />
        <p className="subtitle">
          Lets create a new President and give him a name.
        </p>
        <DpHighlighter code={this.getPresidentCode()} />
        <p className="subtitle">
          Now we will try to create another new President. If our Singleton is
          functioning correctly, we should be able to access the properties from
          the instance that we previously defined because there is only one.
        </p>
        <DpHighlighter code={this.getNewPresCode()} />
        <div className="subtitle head">President</div>
        <p className="subtitle">{prev.name}</p>
      </div>
    );
  }
}

export default Singleton;
