import { useState, useEffect } from "react";
import toggleActiveBtn from "../../helpers/toggleActiveBtn";
import Bill from "../Bill/Bill";
import NumberOfPeople from "../NumberOfPeople/NumberOfPeople";
import ResultValues from "../ResultValues/ResultValues";
import TipSelector from "../TipSelector/TipSelector";
import "./Calculator.css";

function Calculator() {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (
      parseFloat(numberOfPeople) === 0 ||
      numberOfPeople === "" ||
      bill === ""
    ) {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    } else if (bill > 0 && parseFloat(numberOfPeople) > 0) {
      const tempTotal = bill * (1 + tip / 100);
      const tempTotalPerPerson =
        Math.round((tempTotal / parseFloat(numberOfPeople)) * 100) / 100;
      const tempTipPerPerson =
        Math.round(((tempTotal - bill) / parseFloat(numberOfPeople)) * 100) /
        100;
      setTipPerPerson(tempTipPerPerson);
      setTotalPerPerson(tempTotalPerPerson);
    }
  }, [bill, tip, numberOfPeople]);

  useEffect(() => {
    if (reset) {
      setTipPerPerson(0);
      setTotalPerPerson(0);
      setReset(false);
      setTip(0);
      setBill(0);
      setNumberOfPeople(0);
      toggleActiveBtn();
    }
  }, [reset]);

  const handleReset = () => setReset(true);

  return (
    <div className="calculator">
      <div className="calculator-inputs">
        <Bill bill={bill} setBill={setBill} />
        <TipSelector
          tip={tip}
          setTip={setTip}
          toggleActiveBtn={toggleActiveBtn}
        />
        <NumberOfPeople
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />
      </div>
      <div className="calculator-results">
        <ResultValues
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default Calculator;
