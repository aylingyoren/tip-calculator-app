import React, { useState } from "react";

const TIPS = [5, 10, 15, 25, 50];

function TipSelector(props) {
  const { tip, setTip } = props;
  const [showCustomInput, setShowCustomInput] = useState(false);

  return (
    <>
      <h2>Select Tip</h2>
      <div>
        {TIPS.map((tip) => {
          return (
            <button onClick={() => setTip(tip)} value={tip} key={tip}>
              {tip}%
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          setShowCustomInput((showCustomInput) => !showCustomInput);
        }}
      >
        Custom
      </button>
      {showCustomInput ? (
        <input value={tip} onChange={(e) => setTip(e.target.value)} />
      ) : null}
    </>
  );
}

export default TipSelector;
