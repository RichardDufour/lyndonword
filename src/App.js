import './App.css';
import { Navbar } from './components';
import { Header } from './containers';
import React from 'react'
import ReactDOM from 'react-dom'
import { Formula } from './maths';
import { Fraction, toTex } from 'algebra.js';

function App() {

  const a = new Fraction(1, 5);
  const b = new Fraction(2, 7);
  const answer = a.multiply(b);

  return (
    <div className="App gradient__bg">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Formula tex={`${toTex(a)} + ${toTex(b)} = ${toTex(answer)}`} />
      </div>
    </div>
  );
}

export default App;
