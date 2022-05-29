import React from "react";

function NumberOfPeople(props) {
  const { numberOfPeople, setNumberOfPeople } = props;

  return (
    <>
      <h2>Number of People</h2>
      <input
        value={numberOfPeople}
        onChange={(e) => setNumberOfPeople(e.target.value)}
      />
    </>
  );
}

export default NumberOfPeople;
