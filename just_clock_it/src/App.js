import React from 'react';
import './App.css';

import TimeLists from './components/TimeLists'
import AddTimeForm from './components/AddTimeForm';

const App = () => {
  return (
    <div className="App">
      <h1>Just Clock It</h1>
      <TimeLists />
      <AddTimeForm />
    </div>
  );
}

export default App;
