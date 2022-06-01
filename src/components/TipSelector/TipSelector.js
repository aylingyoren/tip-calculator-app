import React from "react";
import toggleActiveBtn from "../../helpers/toggleActiveBtn";
import "./TipSelector.css";

const TIPS = [5, 10, 15, 25, 50];

function TipSelector(props) {
  const { tip, setTip } = props;

  return (
    <div className="tipselector">
      <h3 className="h3-header calc-header">Select Tip</h3>
      <div className="tips-wrapper">
        {TIPS.map((tip) => {
          return (
            <button
              onClick={(e) => {
                setTip(tip);
                toggleActiveBtn(e.target);
              }}
              value={tip}
              key={tip}
              className="btn tips-btn"
            >
              {tip}%
            </button>
          );
        })}
        <input
          onChange={(e) => {
            setTip(e.target.value);
          }}
          onClick={() => toggleActiveBtn()}
          className="btn custom-input"
          placeholder="Custom"
          value={tip}
        />
      </div>
    </div>
  );
}

export default TipSelector;
