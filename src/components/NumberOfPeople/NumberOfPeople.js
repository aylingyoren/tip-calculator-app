import React from "react";
import { ReactComponent as Person } from "../../images/icon-person.svg";

function NumberOfPeople(props) {
  const { numberOfPeople, setNumberOfPeople } = props;

  return (
    <div className="numberofpeople">
      <h3 className="h3-header calc-header">Number of People</h3>
      <input
        className="input"
        value={numberOfPeople}
        onChange={(e) => setNumberOfPeople(e.target.value)}
      />
      <Person className="person" />
    </div>
  );
}

export default NumberOfPeople;
