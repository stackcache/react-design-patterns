/**
 *
 * TextEditor
 *
 */

/* eslint-disable react/prefer-stateless-function */
class TextEditor {
  constructor(state) {
    this.state = state;
    this.setState = newState => {
      this.state = newState;
    };
    this.type = words => this.state.write(words);
  }
}

class WritingState {
  constructor() {
    this.write = null;
  }
}

export class UpperCase extends WritingState {
  constructor() {
    super();
    this.write = words => words.toUpperCase();
  }
}

export class LowerCase extends WritingState {
  constructor() {
    super();
    this.write = words => words.toLowerCase();
  }
}

export class DefaultText extends WritingState {
  constructor() {
    super();
    this.write = words => words;
  }
}

export default TextEditor;
