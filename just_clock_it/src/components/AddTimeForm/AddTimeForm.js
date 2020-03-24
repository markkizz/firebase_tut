import React from 'react'
import {useTimes} from '../../hooks'

export default function AddTimeForm(props) {
  const times = useTimes()
  console.log(times)
  return (
    <form>
      <form>
        <h4>Add Time Entry</h4>
        <div>
          <label>Title</label>
          <input type="text" name="title"/>
        </div>
        <div>
          <label>Time</label>
          <input type="number" name="time"/>
        </div>
      </form>
    </form>
  )
}
