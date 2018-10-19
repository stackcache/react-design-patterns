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
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class State extends React.PureComponent {
  constructor() {
    super();
    this.getEditorCode = this.getEditorCode.bind(this);
    this.getWStateCode = this.getWStateCode.bind(this);
    this.getStateCode = this.getStateCode.bind(this);
  }

  getEditorCode() {
    return `
    class TextEditor {
      constructor(state) {
        this.state = state;
        this.setState = newState => {
          this.state = newState;
        };
        this.type = words => this.state.write(words);
      }
    }
    `;
  }

  getWStateCode() {
    return `
    class WritingState {
      constructor() {
        this.write = null;
      }
    }
    
    class UpperCase extends WritingState {
      constructor() {
        super();
        this.write = words => words.toUpperCase();
      }
    }
    
    class LowerCase extends WritingState {
      constructor() {
        super();
        this.write = words => words.toLowerCase();
      }
    }
    
    class DefaultText extends WritingState {
      constructor() {
        super();
        this.write = words => words;
      }
    }
    `;
  }

  getStateCode() {
    return `
    const editor = new TextEditor(new DefaultText());
    const first = editor.type('First line');

    editor.setState(new UpperCase());
    const second = editor.type('Second line');

    editor.setState(new LowerCase());
    const third = editor.type('Third line');

    <p>Default: {first}</p>
    <p>Upper: {second}</p>
    <p>Lower: {third}</p>
    `;
  }

  render() {
    const editor = new TextEditor(new DefaultText());
    const first = editor.type('First line');

    editor.setState(new UpperCase());
    const second = editor.type('Second line');

    editor.setState(new LowerCase());
    const third = editor.type('Third line');

    return (
      <div>
        <HomeBtn
          previous={{ name: 'Strategy', url: 'strategy' }}
          next={{ name: 'Template Method', url: 'template-method' }}
        />
        <div className="header">State</div>
        <div className="instructions">Im doing it live!</div>
        <p className="subtitle">
          The state pattern allows us to change the behavior of a class when the
          state changes. Lets create a text editor, but also a view state that
          changes how we view the text that we have input.
        </p>
        <DpHighlighter code={this.getEditorCode()} />
        <p className="subtitle">
          Now lets create a few different writing states.
        </p>
        <DpHighlighter code={this.getWStateCode()} />
        <p className="subtitle">
          Finally, we will implement our editor and observe the different view
          states.
        </p>
        <DpHighlighter code={this.getStateCode()} />
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
