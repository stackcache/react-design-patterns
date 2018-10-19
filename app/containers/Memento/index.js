/**
 *
 * Memento
 *
 * Real World Example
 *
 * Take the example of calculator (i.e. originator), where whenever
 * you perform some calculation the last calculation is saved in
 * memory (i.e. memento) so that you can get back to it and maybe
 * get it restored using some action buttons (i.e. caretaker).
 *
 * In plain words
 *
 * Memento pattern is about capturing and storing the current state
 * of an object in a manner that it can be restored later on in a
 * smooth manner.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Editor from '../../components/Editor';
import '../HomePage/HomePage.css';
import DpHighlighter from '../../components/DpHighlighter';
import HomeBtn from '../../components/HomeBtn';

/* eslint-disable react/prefer-stateless-function */
export class Memento extends React.PureComponent {
  constructor() {
    super();
    this.getEditorCode = this.getEditorCode.bind(this);
    this.getRestoreCode = this.getRestoreCode.bind(this);
  }

  getEditorCode() {
    return `
    class EditorMemento {
      constructor(content) {
        this.content = content;
      }
    }
    
    class Editor {
      constructor() {
        this.content = '';
        this.type = words => {
          this.content = '\${this.content} \${words}';
        };
    
        this.save = () => new EditorMemento(this.content);
    
        this.restore = memento => {
          this.content = memento.content;
        };
    
        this.getContent = () => this.content;
      }
    }
    `;
  }

  getRestoreCode() {
    return `
    const editor = new Editor();

    // Type some stuff
    editor.type('This is the first sentence.');
    editor.type('This is second.');

    // Save the state to restore to : This is the first sentence. This is second.
    const saved = editor.save();

    // Type some more
    editor.type('And this is third.');

    // Output: Content before Saving
    const preSaveText = editor.getContent(); // This is the first sentence. This is second. And this is third.

    // Restoring to last saved state
    editor.restore(saved);

    const restoredText = editor.getContent(); 
    `;
  }

  render() {
    const editor = new Editor();

    // Type some stuff
    editor.type('This is the first sentence.');
    editor.type('This is second.');

    // Save the state to restore to : This is the first sentence. This is second.
    const saved = editor.save();

    // Type some more
    editor.type('And this is third.');

    // Output: Content before Saving
    const preSaveText = editor.getContent(); // This is the first sentence. This is second. And this is third.

    // Restoring to last saved state
    editor.restore(saved);

    const restoredText = editor.getContent(); // This is the first sentence. This is second.
    return (
      <div>
        <HomeBtn
          previous={{ name: 'Mediator', url: 'mediator' }}
          next={{ name: 'Observer', url: 'observer' }}
        />
        <div className="header">Memento</div>
        <div className="instructions">Save early...Save often</div>
        <p className="subtitle">
          The memento pattern is all about saving state. We are going to make
          ourselves a primitive text editor. We will save our editor state and
          restore it.
        </p>
        <DpHighlighter code={this.getEditorCode()} />
        <p className="subtitle">
          To visualize, we will create an instance of our editor, make some
          changes, save and restore them.
        </p>
        <DpHighlighter code={this.getRestoreCode()} />
        <p className="subtitle">Original Text: {preSaveText}</p>
        <p className="subtitle">Restored Text: {restoredText}</p>
      </div>
    );
  }
}

Memento.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Memento);
