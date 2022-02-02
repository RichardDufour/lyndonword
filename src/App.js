import logo from './logo.svg';
import './App.css';
import { Navbar } from './components';
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App gradient__bg">
      <div className="gradient__bg">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
