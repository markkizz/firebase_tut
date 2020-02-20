import React, { Component } from "react";
import firebase from "firebase";

export class App extends Component {
  state = {
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null
  };

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data['id'] = doc.id
          return data
        })
        this.setState({
          notes
        })
      });
  };
  render() {
    return <div></div>;
  }
}

export default App;
