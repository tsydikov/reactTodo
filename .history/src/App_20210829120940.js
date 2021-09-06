import React from 'react'
import PostItem from './components/PostItem'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <PostItem post={{id:1, title:'Jsvascript', body:'Jsvascript - programming leng'}} />
    </div>
  );
}

export default App;
