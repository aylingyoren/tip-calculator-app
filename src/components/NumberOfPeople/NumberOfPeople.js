import React, { useEffect, useState } from "react";
import { ReactComponent as Person } from "../../images/icon-person.svg";
import "./NumberOfPeople.css";

function NumberOfPeople(props) {
  const { numberOfPeople, setNumberOfPeople } = props;
  const [error, showError] = useState(false);

  useEffect(() => {
    if (numberOfPeople === "0") {
      showError(true);
    } else {
      showError(false);
    }
  }, [numberOfPeople]);

  return (
    <>
      <div className="numberofpeople">
        <h3 className="h3-header calc-header">Number of People</h3>
        <input
          className={error ? "input input-error" : "input"}
          value={numberOfPeople}
          placeholder="0"
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
        <div>
          <Person className="person" />
        </div>
      </div>
      {error ? <p className="error">Can't be zero or empty</p> : null}
    </>
  );
}

export default NumberOfPeople;
