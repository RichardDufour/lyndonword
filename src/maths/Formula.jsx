import React from 'react';
import { Fraction, toTex } from 'algebra.js';
import { Node, Context } from 'react-mathjax2';

const Formula = ({ tex }) => {
  return (
    <Context input="tex">
      <div>
        <Node inline>{tex}</Node>
      </div>
    </Context>
  );
};

export default Formula;

/*
export default function FractionDisplay() {
    const a = new Fraction(1, 5);
    const b = new Fraction(2, 7);
    const answer = a.multiply(b);
  
    const question = <Formula tex={`${toTex(a)} × ${toTex(b)} = ${toTex(answer)}`} />;
  
    return (
      <div>
        {question}
      </div>
    );
  } */