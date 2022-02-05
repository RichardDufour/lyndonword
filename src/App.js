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

  const configtex = {
    loader: { load: ["[tex]/html"] }
  };

  return (
    <div className="App gradient__bg">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
        <Proposition typeOfProposition="Définition" desc="Un mot de Lyndon n'as pas de facteur propre qui est à la fois un préfixe et un suffixe du mot." title="Mots de Lyndon" config={config} />
    </div>
  );
}

export default App;
