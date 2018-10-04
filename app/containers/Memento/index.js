/**
 *
 * Memento
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Editor from '../../components/Editor';

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
        <h1>Memento</h1>
        <p>Original Text: {preSaveText}</p>
        <p>Restored Text: {restoredText}</p>
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
