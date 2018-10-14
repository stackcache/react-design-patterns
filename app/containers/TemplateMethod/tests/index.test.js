import React from 'react';
import { shallow } from 'enzyme';

import { TemplateMethod, mapDispatchToProps } from '../index';

describe('<TemplateMethod />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<TemplateMethod />);
    expect(
      renderedComponent.contains(
        <p className="subtitle">Deploying android build to server</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
