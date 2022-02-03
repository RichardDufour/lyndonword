import React from 'react';
import { Fraction, toTex } from 'algebra.js';
import { Node, Context } from 'react-mathjax2';

const Formula = ({ props }) => {
  return (
    <Context input="tex">
      <Node inline>{props.tex}</Node>
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