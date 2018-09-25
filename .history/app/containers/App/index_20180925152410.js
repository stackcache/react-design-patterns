/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SimpleFactory from 'containers/SimpleFactory/Loadable';
import FactoryMethod from 'containers/FactoryMethod/Loadable';
import AbstractFactory from 'containers/AbstractFactory/Loadable';
import Builder from 'containers/Builder/Loadable';
import Prototype from 'containers/Prototype/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/simple-factory" component={SimpleFactory} />
        <Route exact path="/factory-method" component={FactoryMethod} />
        <Route exact path="/abstract-factory" component={AbstractFactory} />
        <Route exact path="/builder" component={Builder} />
        <Route exact path="/prototype" component={Prototype} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
