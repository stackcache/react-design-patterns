/**
 *
 * Radio
 *
 */

/* eslint-disable react/prefer-stateless-function */

export class RadioStation {
  constructor(frequency) {
    this.frequency = frequency;
  }
}

class Radio {
  constructor() {
    this.stations = [];
    this.counter = 0;
    this.count = () => this.stations.length;
    this.current = () => this.stations[this.counter];

    this.addStation = station => {
      this.stations.push(station);
    };

    this.removeStation = stationToRemove => {
      this.stations = this.stations.filter(
        station => station.frequency !== stationToRemove.frequency,
      );
    };

    this.next = () => {
      this.counter += 1;
    };

    this.rewind = () => {
      this.counter = 0;
    };

    this.valid = () => this.stations[this.counter] !== undefined;
  }
}

Radio.propTypes = {};

export default Radio;
