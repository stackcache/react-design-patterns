/**
 *
 * DpHighlighter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/styles/hljs';

function DpHighlighter(props) {
  return (
    <div>
      <SyntaxHighlighter
        language="javascript"
        style={tomorrowNightBright}
        customStyle={{ background: '#082d0f' }}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
}

DpHighlighter.propTypes = {
  code: PropTypes.string.isRequired,
};

export default DpHighlighter;
