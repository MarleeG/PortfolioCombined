import { useEffect, useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/name')
      .then(response => {
        // console.log(response)
        setUsername(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {username}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
