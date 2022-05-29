import React from "react";

function ResultValues(props) {
  const { tipPerPerson, totalPerPerson, handleReset } = props;

  return (
    <div>
      <h2>Tip Amount</h2>
      <p>/ person</p>
      <p>{tipPerPerson}</p>
      <h2>Total</h2>
      <p>/ person</p>
      <p>{totalPerPerson}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ResultValues;
