/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h2>Creational Patterns</h2>
        <ul>
          <li>
            <Link to="/simple-factory">Simple Factory</Link>
          </li>
          <li>
            <Link to="/factory-method">Factory Method</Link>
          </li>
          <li>
            <Link to="/abstract-factory">Abstract Factory</Link>
          </li>
          <li>
            <Link to="/builder">Builder</Link>
          </li>
          <li>
            <Link to="/prototype">Prototype</Link>
          </li>
          <li>
            <Link to="/singleton">Singleton</Link>
          </li>
        </ul>
        <h2>Structural Patterns</h2>
        <ul>
          <li>
            <Link to="/adapter">Adapter</Link>
          </li>
          <li>
            <Link to="/bridge">Bridge</Link>
          </li>
          <li>
            <Link to="/composite">Composite</Link>
          </li>
          <li>
            <Link to="/decorator">Decorator</Link>
          </li>
          <li>
            <Link to="/facade">Facade</Link>
          </li>
          <li>
            <Link to="/flyweight">Flyweight</Link>
          </li>
          <li>
            <Link to="/proxy">Proxy</Link>
          </li>
          <li>
            <Link to="/chain-of-responsibility">Chain of Responsibility</Link>
          </li>
        </ul>
        <h2>Behavioral Patterns</h2>
        <ul>
          <li>
            <Link to="/command">Command</Link>
          </li>
          <li>
            <Link to="/iterator">Iterator</Link>
          </li>
          <li>
            <Link to="/mediator">Mediator</Link>
          </li>
          <li>
            <Link to="/memento">Memento</Link>
          </li>
          <li>
            <Link to="/observer">Observer</Link>
          </li>
          <li>
            <Link to="/visitor">Visitor</Link>
          </li>
          <li>
            <Link to="/strategy">Strategy</Link>
          </li>
        </ul>
      </div>
    );
  }
}
