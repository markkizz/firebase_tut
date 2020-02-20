import React, { Component } from "react";
import trim from "trim";
class MessageBox extends Component {
  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleKeyup = e => {
    if (trim(e.target.value) !== "") {
      e.preventDefault();
      const dbRef = this.props.db.database().ref("/messages");
      dbRef.push({
        value: trim(e.target.value)
      });
      this.setState({
        message: ""
      });
    }
  };

  render() {
    return (
      <>
        <form>
          <textarea
            className="textarea"
            placeholder="Type a message"
            cols="100"
            onChange={this.onChange}
            // value={this.state.message}
          />
        </form>
        <button onKeyUp={this.onKeyup}>create</button>
      </>
    );
  }
}
export default MessageBox;
