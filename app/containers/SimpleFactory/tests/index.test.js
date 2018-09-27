import React from 'react';
import { shallow } from 'enzyme';

import { SimpleFactory, mapDispatchToProps } from '../index';

describe('<SimpleFactory />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<SimpleFactory />);

    expect(renderedComponent.contains(<p>God can do anything</p>)).toEqual(
      true,
    );

    expect(renderedComponent.contains(<p>Man cannot do anything</p>)).toEqual(
      true,
    );
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
