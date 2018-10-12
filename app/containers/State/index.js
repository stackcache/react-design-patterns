/**
 *
 * State
 *
 * Real World Example
 *
 * Imagine you are using some drawing application, you
 * choose the paint brush to draw. Now the brush changes
 * its behavior based on the selected color i.e. if you
 * have chosen red color it will draw in red, if blue
 * then it will be in blue etc.
 *
 * In plain words
 *
 * It lets you change the behavior of a class when the
 * state changes.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TextEditor, {
  DefaultText,
  UpperCase,
  LowerCase,
} from '../../components/TextEditor';
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class State extends React.PureComponent {
  render() {
    const editor = new TextEditor(new DefaultText());
    const first = editor.type('First line');

    editor.setState(new UpperCase());
    const second = editor.type('Second line');

    editor.setState(new LowerCase());
    const third = editor.type('Third line');

    return (
      <div>
        <div className="header">State</div>
        <div className="instructions">Im doing it live!</div>
        <p className="subtitle">Default: {first}</p>
        <p className="subtitle">Upper: {second}</p>
        <p className="subtitle">Lower: {third}</p>
      </div>
    );
  }
}

State.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(State);
