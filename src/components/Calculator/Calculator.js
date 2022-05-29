import React from "react";
import Bill from "../Bill/Bill";
import NumberOfPeople from "../NumberOfPeople/NumberOfPeople";
import ResultValues from "../ResultValues/ResultValues";
import TipSelector from "../TipSelector/TipSelector";

function Calculator() {
  return (
    <>
      <h1>Calculator</h1>
      <Bill />
      <TipSelector />
      <NumberOfPeople />
      <div>
        <ResultValues />
      </div>
    </>
  );
}

export default Calculator;
