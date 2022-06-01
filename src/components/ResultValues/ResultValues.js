import React from "react";
import "./ResultValues.css";

function ResultValues(props) {
  const { tipPerPerson, totalPerPerson, handleReset } = props;

  return (
    <div className="resultvalues">
      <div className="result-group">
        <div className="result-group-item">
          <h3 className="h3-header result-header">Tip Amount</h3>
          <p className="result-subheader">/ person</p>
        </div>
        <p className="result-amount">${tipPerPerson}</p>
      </div>
      <div className="result-group">
        <div className="result-group-item">
          <h3 className="h3-header result-header">Total</h3>
          <p className="result-subheader">/ person</p>
        </div>
        <p className="result-amount">${totalPerPerson}</p>
      </div>
      <button className="btn reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ResultValues;
