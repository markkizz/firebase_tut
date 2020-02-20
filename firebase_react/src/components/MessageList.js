import React, { Component } from 'react'

export class MessageList extends Component {
  state = {
    message: []
  }
  render() {
    const app = this.props.db.database().ref('messages')
    app.on('value', snapshot => {
      const messageVal = snapshot.val()
      console.log(messageVal);
    })

    return (
      <div>
        Message list
      </div>
    )
  }
}

export default MessageList
