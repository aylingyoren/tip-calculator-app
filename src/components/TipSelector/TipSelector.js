import React, { useState } from "react";
import "./TipSelector.css";

const TIPS = [5, 10, 15, 25, 50];

function TipSelector(props) {
  const { tip, setTip } = props;
  const [showCustomInput, setShowCustomInput] = useState(false);

  return (
    <div className="tipselector">
      <h3 className="h3-header calc-header">Select Tip</h3>
      <div className="tips-wrapper">
        {TIPS.map((tip) => {
          return (
            <button
              onClick={() => setTip(tip)}
              value={tip}
              key={tip}
              className="btn tips-btn"
            >
              {tip}%
            </button>
          );
        })}
        <button
          onClick={() => {
            setShowCustomInput((showCustomInput) => !showCustomInput);
          }}
          className="btn custom-btn"
        >
          Custom
        </button>
        {showCustomInput ? (
          <input
            className="input"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        ) : null}
      </div>
    </div>
  );
}

export default TipSelector;
