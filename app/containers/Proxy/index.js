/**
 *
 * Proxy
 *
 * Real World Example
 *
 * Have you ever used an access card to go through a door?
 * There are multiple options to open that door i.e. it
 * can be opened either using access card or by pressing a
 * button that bypasses the security. The door's main
 * functionality is to open but there is a proxy added on
 * top of it to add some functionality. Let me better
 * explain it using the code example below.
 *
 * In plain words
 *
 * Using the proxy pattern, a class represents the functionality of another class.
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import SecuredDoor from '../../components/SecuredDoor';
import { LabDoor } from '../../components/Door';

/* eslint-disable react/prefer-stateless-function */
export class Proxy extends React.PureComponent {
  render() {
    const door = new SecuredDoor(new LabDoor());
    const denied = door.open('inv@lid');
    const approved = door.open('$ecr3t');
    door.close();

    return (
      <div>
        <h1>Proxy</h1>
        <p>I am user1. Do I have access? {denied}</p>
        <p>I am user2. Do I have access? {approved}</p>
      </div>
    );
  }
}

Proxy.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Proxy);
