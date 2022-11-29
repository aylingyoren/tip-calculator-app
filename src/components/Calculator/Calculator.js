import { useState, useEffect } from "react";
import toggleActiveBtn from "../../helpers/toggleActiveBtn";
import Bill from "../Bill/Bill";
import NumberOfPeople from "../NumberOfPeople/NumberOfPeople";
import ResultValues from "../ResultValues/ResultValues";
import TipSelector from "../TipSelector/TipSelector";
import "./Calculator.css";

const roundToHundred = (numberOne, numberTwo) =>
  Math.round((numberOne / numberTwo) * 100) / 100;

function Calculator() {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  useEffect(() => {
    if (numberOfPeople === 0 || bill === 0) {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    } else if (numberOfPeople === 0) {
      setTotalPerPerson(bill);
    } else if (bill > 0 && numberOfPeople > 0) {
      const tempTotal = bill * (1 + tip / 100);
      const tempTotalPerPerson = roundToHundred(tempTotal, numberOfPeople);
      const tempTipPerPerson = roundToHundred(tempTotal - bill, numberOfPeople);
      setTipPerPerson(tempTipPerPerson);
      setTotalPerPerson(tempTotalPerPerson);
    }
  }, [bill, tip, numberOfPeople]);

  const handleReset = () => {
    setTipPerPerson(0);
    setTotalPerPerson(0);
    setTip(0);
    setBill(0);
    setNumberOfPeople(1);
    toggleActiveBtn();
  };

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
