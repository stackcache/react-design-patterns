// import React from 'react';
// import { shallow } from 'enzyme';

import Radio, { RadioStation } from '../index';

describe('<Radio />', () => {
  it('Expect to be able to add stations to the station list', () => {
    const stationList = new Radio();

    stationList.addStation(new RadioStation(89));

    expect(stationList.valid()).toBeTruthy();
    expect(stationList.count()).toEqual(1);
    expect(stationList.current().frequency).toEqual(89);
  });

  it('Expect iterator to be able to detect next station', () => {
    const stationList = new Radio();

    stationList.addStation(new RadioStation(89));
    stationList.addStation(new RadioStation(101));

    expect(stationList.current().frequency).toEqual(89);

    stationList.next();

    expect(stationList.current().frequency).toEqual(101);
  });

  it('Expect iterator to be able to rewind', () => {
    const stationList = new Radio();

    stationList.addStation(new RadioStation(89));
    stationList.addStation(new RadioStation(101));
    stationList.next();

    expect(stationList.current().frequency).toEqual(101);

    stationList.rewind();

    expect(stationList.current().frequency).toEqual(89);
  });
});
