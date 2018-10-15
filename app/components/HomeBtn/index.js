/**
 *
 * HomeBtn
 *
 */

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeBtn() {
  return (
    <div
      className="home-btn"
      style={{
        margin: '20px',
        position: 'absolute',
        fontFamily: 'inherit',
        fontSize: 24,
        fontWeight: 300,
      }}
    >
      <a
        href="/"
        style={{
          textDecoration: 'none',
          color: '#082d0f',
        }}
      >
        <SvgIcon
          style={{
            fill: '#082d0f',
            cursor: 'pointer',
            fontSize: 40,
            marginRight: '12px',
          }}
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
        All Patterns
      </a>
    </div>
  );
}

export default HomeBtn;
