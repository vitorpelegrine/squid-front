
import React from 'react';
import logo from './logo.svg';
import Squid from "./components/Squid";
import './App.css';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Squid />
      </body>
      
    </div>
  );
}

export default App;
