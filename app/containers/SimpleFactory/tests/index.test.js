import React from 'react';
import { mount } from 'enzyme';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import simpleFactoryReducer from '../reducer';

import { SimpleFactory, mapDispatchToProps } from '../index';

describe('<SimpleFactory />', () => {
  it('should render the page message', () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      simpleFactoryReducer,
      compose(applyMiddleware(sagaMiddleware)),
    );

    const renderedComponent = mount(
      <Provider store={store}>
        <SimpleFactory />
      </Provider>,
    );

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
