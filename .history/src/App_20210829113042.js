import React, { useState } from 'react'
import ClassComponent from './components/ClassCounter'
import Counter from './components/Counter'

function App() {
  const [value,setValue] = useState('text')
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Jsvascript</strong>
          <div>
            Jsvascript - programming leng
          </div>
        </div>
        <div className="post__btn">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
