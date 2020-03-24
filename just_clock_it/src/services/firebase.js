import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase conf
const firebaseConfig = {
  apiKey: "AIzaSyDVLoCHMGGtLNdyRWl0SKReARfIfPi6vuU",
  authDomain: "just-clock-it-eef74.firebaseapp.com",
  databaseURL: "https://just-clock-it-eef74.firebaseio.com",
  projectId: "just-clock-it-eef74",
  storageBucket: "just-clock-it-eef74.appspot.com",
  messagingSenderId: "667806152744",
  appId: "1:667806152744:web:258de9dc0de7345a0e5d1d",
  measurementId: "G-5V9M065J74"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig)

export default firebase
