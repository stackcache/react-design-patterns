import React from 'react';
import { shallow } from 'enzyme';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/styles/hljs';

import DpHighlighter from '../index';

describe('<DpHighlighter />', () => {
  it('Expect to have unit tests specified', () => {
    const renderedComponent = shallow(<DpHighlighter code="test" />);

    expect(
      renderedComponent.contains(
        <div>
          <SyntaxHighlighter
            language="javascript"
            style={tomorrowNightBright}
            customStyle={{ background: '#082d0f' }}
          >
            test
          </SyntaxHighlighter>
        </div>,
      ),
    ).toEqual(true);
  });
});
