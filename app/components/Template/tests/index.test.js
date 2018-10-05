import { TemplateBuilder } from '../index';

describe('<Template />', () => {
  it('Expect to have a build function', () => {
    const tb = new TemplateBuilder();
    expect(tb.test()).toEqual(undefined);
    expect(tb.lint()).toEqual(undefined);
    expect(tb.assemble()).toEqual(undefined);
    expect(tb.deploy()).toEqual(undefined);
  });
});
