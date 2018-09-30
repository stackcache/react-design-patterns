import React from 'react';
import { shallow } from 'enzyme';

import { Adapter, WildDogAdapter, mapDispatchToProps } from '../index';
import WildDog from '../../../components/WildDog';
import Hunter from '../../../components/Hunter';

describe('<Adapter />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<Adapter />);
    expect(
      renderedComponent.contains(
        <p>
          The hunter usually hunts lions, but adapts and is hunting a wild dog.
          The wild dog lets out a wild dog bark!
        </p>,
      ),
    ).toEqual(true);
  });

  it('Expect adapter to allow hunter to hunt wild dogs as well as lions', () => {
    const wildDog = new WildDog();
    const wildDogAdapter = new WildDogAdapter(wildDog);

    const hunter = new Hunter();
    const animalSound = hunter.hunt(wildDogAdapter);
    expect(animalSound).toEqual('wild dog bark!');
  });

  it('should handle dispatches', () => {
    expect(mapDispatchToProps('test')).toEqual({ dispatch: 'test' });
  });
});
