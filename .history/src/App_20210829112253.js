import React, { useState } from 'react'
import ClassComponent from './components/ClassCounter'
import Counter from './components/Counter'

function App() {
  const [value,setValue] = useState('text')
  return (
    <div className="App">
      <h1>{value}</h1>
      <input 
        type="text"
        value={value}
        onChange={event =>setValue(event.target.value)}
      />
      <ClassComponent />
    </div>
  );
}

export default App;
