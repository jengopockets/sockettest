import React from 'react';
import Chat from './components/Chat'

import './App.css';
import Header from './components/Header';

function App() {
 

  return (
    <div className="App">
      <Header />
      <div className="chat-box">
        <Chat />
      </div>

    </div>
  );
}

export default App;