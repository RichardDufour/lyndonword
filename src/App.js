import './App.css';
import { Navbar, Proposition } from './components';
import { Header } from './containers';
import React from 'react'
import ReactDOM from 'react-dom'
import { Formula } from './maths';
import { Fraction, toTex } from 'algebra.js';
import { MathJax, MathJaxContext } from "better-react-mathjax";

function App() {

  const config = {
    loader: { load: ["input/asciimath"] }
  };

  return (
    <div className="App gradient__bg">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
        <Proposition typeOfProposition="Définition" desc="`frac(10)(4x) approx 2^(12)`" title="Mots de Lyndon" />
    </div>
  );
}

export default App;
