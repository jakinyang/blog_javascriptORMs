import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState('');
  useEffect(() => {
    axios.get('/')
      .then((res) => {
        console.log("Response data: ", res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {state}
        </p>
      </header>
    </div>
  );
}

export default App;
