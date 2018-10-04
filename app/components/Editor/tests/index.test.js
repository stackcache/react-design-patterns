import Editor from '../index';

describe('<Editor />', () => {
  it('Expect to have unit tests specified', () => {
    const editor = new Editor();
    editor.type('This is a test.');
    const saved = editor.save();
    editor.type('And this is the grade.');

    expect(editor.getContent()).toEqual(
      ' This is a test. And this is the grade.',
    );

    editor.restore(saved);
    expect(editor.getContent()).toEqual(' This is a test.');
  });
});
