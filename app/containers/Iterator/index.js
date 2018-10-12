/**
 *
 * Iterator
 *
 * Real World Example
 *
 * An old radio set will be a good example of iterator,
 * where user could start at some channel and then use
 * next or previous buttons to go through the respective
 * channels. Or take an example of MP3 player or a TV set
 * where you could press the next and previous buttons to
 * go through the consecutive channels or in other words
 * they all provide an interface to iterate through the
 * respective channels, songs or radio stations.
 *
 * In plain words
 *
 * It presents a way to access the elements of an object
 * without exposing the underlying presentation.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Radio, { RadioStation } from '../../components/Radio';
import '../HomePage/HomePage.css';

/* eslint-disable react/prefer-stateless-function */
export class Iterator extends React.PureComponent {
  render() {
    const messages = [];
    const stationList = new Radio();

    stationList.addStation(new RadioStation(89));
    stationList.addStation(new RadioStation(101));
    stationList.addStation(new RadioStation(102));
    stationList.addStation(new RadioStation(103.2));

    stationList.removeStation(new RadioStation(89)); // Will remove station 89

    stationList.stations.forEach(station => {
      messages.push(station.frequency);
    });

    return (
      <div>
        <div className="header">Iterator</div>
        <div className="instructions">Switch the station</div>
        <div className="subtitle head">
          After removing station with frequency 89, the list of stations is...
        </div>
        {messages.map(message => <p className="subtitle">{message}</p>)}
      </div>
    );
  }
}

Iterator.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Iterator);
