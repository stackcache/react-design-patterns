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

/* eslint-disable react/prefer-stateless-function */
export class Bridge extends React.PureComponent {
  render() {
    const darkTheme = new DarkTheme();
    const lightTheme = new LightTheme();
    const about = new About(darkTheme);
    const careers = new Careers(lightTheme);
    return (
      <div>
        <div className="header">Bridge</div>
        <div className="instructions">Site themes</div>
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
