// import React from 'react';
// import { shallow } from 'enzyme';

import Theme, { DarkTheme, LightTheme, AquaTheme } from '../index';

describe('<Theme />', () => {
  it('Expect theme to have a color', () => {
    const theme = new Theme();
    expect(theme.getColor).toBeInstanceOf(Function);
    expect(theme.getColor()).toEqual(undefined);
  });

  it('Expect dark theme to have a dark color', () => {
    const dTheme = new DarkTheme();
    expect(dTheme.getColor()).toEqual('Dark Black');
  });

  it('Expect light theme to have a light color', () => {
    const lTheme = new LightTheme();
    expect(lTheme.getColor()).toEqual('Off White');
  });

  it('Expect aqua theme to have a light blue color', () => {
    const aTheme = new AquaTheme();
    expect(aTheme.getColor()).toEqual('Light Blue');
  });
});
