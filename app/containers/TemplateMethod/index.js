/**
 *
 * TemplateMethod
 *
 * Real World Example
 *
 * Suppose we are getting some house built. The steps for building might look like...
 * Prepare the base of house -> Build the walls -> Add roof -> Add other floors
 * The order of these steps could never be changed i.e. you can't build the roof
 * before building the walls etc but each of the steps could be modified for example
 * walls can be made of wood or polyester or stone.
 *
 * In plain words
 *
 * Template method defines the skeleton of how a certain algorithm could be performed,
 * but defers the implementation of those steps to the children classes.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AndroidBuilder, IosBuilder } from '../../components/Template';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class TemplateMethod extends React.PureComponent {
  constructor() {
    super();
    this.getBuilderCode = this.getBuilderCode.bind(this);
    this.getChildrenCode = this.getChildrenCode.bind(this);
    this.getTMCode = this.getTMCode.bind(this);
  }

  getBuilderCode() {
    return `
    class TemplateBuilder {
      constructor() {
        this.test = () => {};
        this.lint = () => {};
        this.assemble = () => {};
        this.deploy = () => {};
        this.build = () => {
          const messages = [];
          messages.push(this.test());
          messages.push(this.lint());
          messages.push(this.assemble());
          messages.push(this.deploy());
          return messages;
        };
      }
    }
    `;
  }

  getChildrenCode() {
    return `
    class AndroidBuilder extends TemplateBuilder {
      constructor() {
        super();
        this.test = () => 'Running android tests';
        this.lint = () => 'Linting the android code';
        this.assemble = () => 'Assembling the android build';
        this.deploy = () => 'Deploying android build to server';
      }
    }
    
    class IosBuilder extends TemplateBuilder {
      constructor() {
        super();
        this.test = () => 'Running ios tests';
        this.lint = () => 'Linting the ios code';
        this.assemble = () => 'Assembling the ios build';
        this.deploy = () => 'Deploying ios build to server';
      }
    }
    `;
  }

  getTMCode() {
    return `
    const android = new AndroidBuilder();
    const ios = new IosBuilder();

    <div>Android</div>
    {android.build().map((msg, i) => (
      <p key={i.toString()}>
        {msg}
      </p>
    ))}
    <div>IOS</div>
    {ios.build().map((msg, i) => (
      <p key={i.toString()}>
        {msg}
      </p>
    ))}
    `;
  }

  render() {
    const android = new AndroidBuilder();
    const ios = new IosBuilder();
    return (
      <div>
        <HomeBtn previous={{ name: 'State', url: 'state' }} />
        <div className="header">Template Method</div>
        <div className="instructions">Follow the plan</div>
        <p className="subtitle">
          The template method pattern is like a blueprint for how to execute
          something, without the detailed plans on HOW to implement. It defers
          the implementation to the implementers. Lets create a TemplateBuilder
          for iOS and Android apps.
        </p>
        <DpHighlighter code={this.getBuilderCode()} />
        <p className="subtitle">
          Now we will create our iOS and Android builders that will extend our
          base class.
        </p>
        <DpHighlighter code={this.getChildrenCode()} />
        <p className="subtitle">
          Finally, we can implement these and observe each child class
          implementing the methods defined by the parent class.
        </p>
        <DpHighlighter code={this.getTMCode()} />
        <div className="subtitle head">Android</div>
        {android.build().map((msg, i) => (
          <p className="subtitle" key={i.toString()}>
            {msg}
          </p>
        ))}
        <div className="subtitle head">IOS</div>
        {ios.build().map((msg, i) => (
          <p className="subtitle" key={i.toString()}>
            {msg}
          </p>
        ))}
      </div>
    );
  }
}

TemplateMethod.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(TemplateMethod);
