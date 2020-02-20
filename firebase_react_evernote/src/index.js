import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDA2It7H8a7CvaLnv31stce9-0a_pi6f7w",
  authDomain: "testfirebase-13da7.firebaseapp.com",
  databaseURL: "https://testfirebase-13da7.firebaseio.com",
  projectId: "testfirebase-13da7",
  storageBucket: "testfirebase-13da7.appspot.com",
  messagingSenderId: "964893062603",
  appId: "1:964893062603:web:66c2e48c54134a741af24e",
  measurementId: "G-4V4QELPJJ8"
});
ReactDOM.render(<App />, document.getElementById("evernote-container"));
