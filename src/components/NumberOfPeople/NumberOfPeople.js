import React from "react";

function NumberOfPeople(props) {
  const { numberOfPeople, setNumberOfPeople } = props;

  return (
    <>
      <h3 className="h3-header calc-header">Number of People</h3>
      <input
        className="input"
        value={numberOfPeople}
        onChange={(e) => setNumberOfPeople(e.target.value)}
      />
    </>
  );
}

export default NumberOfPeople;
