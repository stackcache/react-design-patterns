import React from 'react';
import { mount } from 'enzyme';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import factoryMethodReducer from '../reducer';

import {
  FactoryMethod,
  mapDispatchToProps,
  HiringManager,
  Interviewer,
} from '../index';

describe('<FactoryMethod />', () => {
  it('should render the page message', () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      factoryMethodReducer,
      compose(applyMiddleware(sagaMiddleware)),
    );

    const renderedComponent = mount(
      <Provider store={store}>
        <FactoryMethod />
      </Provider>,
    );

    expect(
      renderedComponent.contains(
        <p>Dev manager will be asking about design patterns</p>,
      ),
    ).toEqual(true);

    expect(
      renderedComponent.contains(
        <p>Marketing manager will be asking about social media</p>,
      ),
    ).toEqual(true);
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });

  it('should create new Hiring Managers', () => {
    const hMgr = new HiringManager();
    const interviewer = hMgr.makeInterviewer();
    expect(interviewer).toBeInstanceOf(Interviewer);
    expect(interviewer.askQuestions()).toBe(undefined);
  });
});
