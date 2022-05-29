import React, { useState } from "react";

function TipSelector(props) {
  const { tip, setTip, customValue, setCustomValue } = props;
  const [showCustomInput, setShowCustomInput] = useState(false);

  return (
    <>
      <h2>Select Tip</h2>
      <button>5%</button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
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
