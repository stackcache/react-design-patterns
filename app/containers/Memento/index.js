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

/* eslint-disable react/prefer-stateless-function */
export class Memento extends React.PureComponent {
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
        <div className="header">Memento</div>
        <div className="instructions">Save early...Save often</div>
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
