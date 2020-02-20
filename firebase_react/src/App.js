import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';

import "./App.css";

import Header from "./components/Header";
import MessageList from "./components/MessageList";
import MessageBox from "./components/MessageBox";

const firebaseConfig = {
  apiKey: "AIzaSyDA2It7H8a7CvaLnv31stce9-0a_pi6f7w",
  authDomain: "testfirebase-13da7.firebaseapp.com",
  databaseURL: "https://testfirebase-13da7.firebaseio.com",
  projectId: "testfirebase-13da7",
  storageBucket: "testfirebase-13da7.appspot.com",
  messagingSenderId: "964893062603",
  appId: "1:964893062603:web:3351b9f1a62dc2991af24e",
  measurementId: "G-MW8FQ0137D"
};

firebase.initializeApp(firebaseConfig);

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
