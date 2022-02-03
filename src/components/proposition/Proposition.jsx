import React from 'react';
import './proposition.css'

const Proposition = ({ typeOfProposition, title, desc }) => {
  return <MathJaxContext config={config}>
            <h1 className={typeOfProposition}>{title}</h1>
            <MathJax>{desc}</MathJax>
        </MathJaxContext>;
};

export default Proposition;