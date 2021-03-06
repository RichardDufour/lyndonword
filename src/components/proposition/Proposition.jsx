import React from 'react';
import './proposition.css'
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Proposition = ({ typeOfProposition, title, desc, config }) => {
  return <div className="lyndonwords__proposition">
  <MathJaxContext config={config}>
            <h1 className="lyndonwords__proposition-type"> {typeOfProposition} </h1>
            <h2 className="lyndonwords__proposition-title">{title}</h2>
            <MathJax>{desc}</MathJax>
        </MathJaxContext>
        </div> ;
};

export default Proposition;