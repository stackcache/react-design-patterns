/**
 *
 * ChatRoom
 *
 */

/* eslint-disable react/prefer-stateless-function */
class ChatRoomMediator {
  constructor() {
    this.showMessage = null;
  }
}

class ChatRoom extends ChatRoomMediator {
  constructor() {
    super();
    this.showMessage = (user, message) => {
      const sender = user.name;
      return `[${sender}]: ${message}`;
    };
  }
}

export class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
    this.send = message => this.mediator.showMessage(this, message);
  }
}

ChatRoom.propTypes = {};

export default ChatRoom;
