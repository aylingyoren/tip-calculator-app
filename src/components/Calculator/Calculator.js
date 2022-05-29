import { useState, useEffect } from "react";
import Bill from "../Bill/Bill";
import NumberOfPeople from "../NumberOfPeople/NumberOfPeople";
import ResultValues from "../ResultValues/ResultValues";
import TipSelector from "../TipSelector/TipSelector";

function Calculator() {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [customValue, setCustomValue] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (numberOfPeople === 0) {
      setTipPerPerson(0);
      setTotalPerPerson(0);
    } else {
      const tempTotal = bill * (1 + tip / 100);
      const tempTotalPerPerson =
        Math.round((tempTotal / numberOfPeople) * 100) / 100;
      const tempTipPerPerson =
        Math.round(((tempTotal - bill) / numberOfPeople) * 100) / 100;
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
      setCustomValue("");
    }
  }, [reset]);

  const handleReset = () => setReset(true);

  return (
    <>
      <h1>Calculator</h1>
      <Bill bill={bill} setBill={setBill} />
      <TipSelector
        tip={tip}
        setTip={setTip}
        customValue={customValue}
        setCustomValue={setCustomValue}
      />
      <NumberOfPeople
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
      />
      <div>
        <ResultValues
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          handleReset={handleReset}
        />
      </div>
    </>
  );
}

export default Calculator;
