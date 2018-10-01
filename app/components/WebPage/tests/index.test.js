import WebPage, { About, Careers } from '../index';
import { LightTheme, DarkTheme } from '../../Theme';

describe('<WebPage />', () => {
  it('Expect web page to have content', () => {
    const wp = new WebPage();
    expect(wp.getContent).toBeInstanceOf(Function);
    expect(wp.getContent()).toEqual(undefined);
  });

  it('Expect about page to have about content', () => {
    const dTheme = new DarkTheme();
    const ap = new About(dTheme);
    expect(ap.getContent()).toEqual('About page in Dark Black');
  });

  it('Expect careers page to have careers content', () => {
    const lTheme = new LightTheme();
    const cp = new Careers(lTheme);
    expect(cp.getContent()).toEqual('Careers page in Off White');
  });
});
