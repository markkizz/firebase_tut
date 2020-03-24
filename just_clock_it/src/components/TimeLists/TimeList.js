import React, {useState, useEffect} from 'react'

export default function TimeList() {
  return (
    <>
      <h2>Times List</h2>
      <div>
        <label>Sort By:</label>
        <select>
          <option value="Time (fastest first)">Time (fastest first)</option>
          <option value="Time (slowest first)">Time (slowest first)</option>
          <option disabled>-----------------------</option>
          <option value="Title (a-z)">Title (a-z)</option>
          <option value="Title (z-a)">Title (z-a)</option>
        </select>
      </div>
      <ol>
        <li>
          <div className="time-entry">
            My Time List
            <code className="time">18 sec</code>
          </div>
        </li>
      </ol>
    </>
  )
}
