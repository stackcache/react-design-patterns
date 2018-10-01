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

class Singleton extends React.PureComponent {
  constructor(props) {
    super(props);
    if (!Singleton.instance) {
      this.data = [];
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  add(item) {
    this.data.push(item);
  }

  get(id) {
    return this.data.find(d => d.id === id);
  }

  render() {
    const President = new Singleton();
    Object.freeze(President);
    President.add({ id: '44', name: 'Barack Obama' });

    const President2 = new Singleton();
    const prev = President2.get('44');
    return (
      <div>
        <h1>Singleton</h1>
        <h2>President</h2>
        <p>{prev.name}</p>
      </div>
    );
  }
}

export default Singleton;