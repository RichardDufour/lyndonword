import './App.css';
import { Navbar } from './components';
import { Header } from './containers';
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App gradient__bg">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
