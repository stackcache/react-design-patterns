import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-image: linear-gradient(127deg, #dee5e5, #9dc5bb);
    min-height: 100%;
    min-width: 100%;
    overflow: auto;
  }

  p,
  label {
    font-family: 'Roboto', Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
