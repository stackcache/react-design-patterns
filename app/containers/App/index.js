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
import Singleton from 'components/Singleton/Loadable';
import Adapter from 'containers/Adapter/Loadable';
import Bridge from 'containers/Bridge/Loadable';
import Composite from 'containers/Composite/Loadable';
import Decorator from 'containers/Decorator/Loadable';
import Facade from 'containers/Facade/Loadable';
import Flyweight from 'containers/Flyweight/Loadable';
import Proxy from 'containers/Proxy/Loadable';
import ChainOfResponsibility from 'containers/ChainOfResponsibility/Loadable';
import Command from 'containers/Command/Loadable';
import Iterator from 'containers/Iterator/Loadable';
import Mediator from 'containers/Mediator/Loadable';

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
        <Route exact path="/singleton" component={Singleton} />
        <Route exact path="/adapter" component={Adapter} />
        <Route exact path="/bridge" component={Bridge} />
        <Route exact path="/composite" component={Composite} />
        <Route exact path="/decorator" component={Decorator} />
        <Route exact path="/facade" component={Facade} />
        <Route exact path="/flyweight" component={Flyweight} />
        <Route exact path="/proxy" component={Proxy} />
        <Route
          exact
          path="/chain-of-responsibility"
          component={ChainOfResponsibility}
        />
        <Route exact path="/command" component={Command} />
        <Route exact path="/iterator" component={Iterator} />
        <Route exact path="/mediator" component={Mediator} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
