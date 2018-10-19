/**
 *
 * HomeBtn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeBtn(props) {
  return (
    <div
      className="home-btn"
      style={{
        padding: '20px',
        position: 'absolute',
        fontFamily: 'inherit',
        fontSize: 24,
        fontWeight: 300,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {props.previous && (
        <a
          href={props.previous.url}
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
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </SvgIcon>
          {props.previous.name}
        </a>
      )}

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

      {props.next && (
        <a
          href={props.next.url}
          style={{
            textDecoration: 'none',
            color: '#082d0f',
          }}
        >
          {props.next.name}
          <SvgIcon
            style={{
              fill: '#082d0f',
              cursor: 'pointer',
              fontSize: 40,
              marginRight: '12px',
            }}
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </SvgIcon>
        </a>
      )}
    </div>
  );
}

HomeBtn.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default HomeBtn;
