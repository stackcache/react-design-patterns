/**
 *
 * Editor
 *
 */

/* eslint-disable react/prefer-stateless-function */
class EditorMemento {
  constructor(content) {
    this.content = content;
  }
}

class Editor {
  constructor() {
    this.content = '';
    this.type = words => {
      this.content = `${this.content} ${words}`;
    };

    this.save = () => new EditorMemento(this.content);

    this.restore = memento => {
      this.content = memento.content;
    };

    this.getContent = () => this.content;
  }
}

Editor.propTypes = {};

export default Editor;
