import {useState, useEffect} from 'react'
import firebase from '../services/firebase'
export default () => {
  const [times, setTimes] = useState([])

  useEffect(() => {
    firebase.firestore().collection('times').onSnapshot(snapShot => {
      const newTimes = snapShot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      setTimes(newTimes)
    })
  },[])

  return {times, setTimes}
}
