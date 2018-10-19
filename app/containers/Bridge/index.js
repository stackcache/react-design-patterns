/**
 *
 * Bridge
 *
 * Real World Example
 *
 * Consider you have a website with different pages
 * and you are supposed to allow the user to change
 * the theme. What would you do? Create multiple copies
 * of each of the pages for each of the themes or would
 * you just create separate theme and load them based on
 * the user's preferences?
 *
 * In plain words
 *
 * Bridge pattern is about preferring composition
 * over inheritance. Implementation details are pushed
 * from a hierarchy to another object with a separate hierarchy.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DarkTheme, LightTheme } from '../../components/Theme';
import { About, Careers } from '../../components/WebPage';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Bridge extends React.PureComponent {
  constructor() {
    super();
    this.getWebPageCode = this.getWebPageCode.bind(this);
    this.getThemeCode = this.getThemeCode.bind(this);
    this.getImplementation = this.getImplementation.bind(this);
  }

  getWebPageCode() {
    return `
    class WebPage {
      constructor() {
        this.getContent = () => {};
      }
    }
    
    class About extends WebPage {
      constructor(theme) {
        super();
        this.theme = theme;
        this.getContent = () => 'About page in \${this.theme.getColor()}';
      }
    }
    
    class Careers extends WebPage {
      constructor(theme) {
        super();
        this.theme = theme;
        this.getContent = () => 'Careers page in \${this.theme.getColor()}';
      }
    }
    `;
  }

  getThemeCode() {
    return `
    class Theme {
      constructor() {
        this.getColor = () => {};
      }
    }
    
    class DarkTheme extends Theme {
      constructor() {
        super();
        this.getColor = () => 'Dark Black';
      }
    }
    
    class LightTheme extends Theme {
      constructor() {
        super();
        this.getColor = () => 'Off White';
      }
    }
    `;
  }

  getImplementation() {
    return `
    const darkTheme = new DarkTheme();
    const lightTheme = new LightTheme();
    const about = new About(darkTheme);
    const careers = new Careers(lightTheme);

    <p className="subtitle">{about.getContent()}</p>
    <p className="subtitle">{careers.getContent()}</p>
    `;
  }

  render() {
    const darkTheme = new DarkTheme();
    const lightTheme = new LightTheme();
    const about = new About(darkTheme);
    const careers = new Careers(lightTheme);

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Adapter', url: 'adapter' }}
          next={{ name: 'Composite', url: 'composite' }}
        />
        <div className="header">Bridge</div>
        <div className="instructions">Site themes</div>
        <p className="subtitle">
          This pattern is all about separation of concerns. I think there is a
          clever phrase about something rolling downhill. One example of this is
          using themes in a webpage. First, we will create two themes.
        </p>
        <DpHighlighter code={this.getThemeCode()} />
        <p className="subtitle">Next, we will create two web pages.</p>
        <DpHighlighter code={this.getWebPageCode()} />
        <p className="subtitle">
          Now whenever we create a webpage, we can assign it a theme and the
          code for each concern is obfuscated from each other.
        </p>
        <DpHighlighter code={this.getImplementation()} />
        <p className="subtitle">{about.getContent()}</p>
        <p className="subtitle">{careers.getContent()}</p>
      </div>
    );
  }
}

Bridge.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Bridge);
