import React, { Component } from "react";
import firebase from "firebase";

import Editor from "./components/Editor/Editor";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarItem from "./components/SidebarItem/SidebarItem";

import './App.css'

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
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          notes
        });
      });
  };
  render() {
    const {selectedNoteIndex, selectedNote, notes} = this.state
    return (
      <div className="app-container">
        <Sidebar selectedNoteIndex={selectedNoteIndex} />
        <Editor />
      </div>
    );
  }
}

export default App;
