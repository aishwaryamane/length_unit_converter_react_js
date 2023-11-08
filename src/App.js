import React, { useState } from "react";
import "./App.css";
import { units } from "./data.js";
export default function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [firstUnit, setFirstUnit] = useState(1000);
  const [secondUnit, setSecondUnit] = useState(1000);

  //handle first inputbox value change
  const handleFirstChange = (value) => {
    if (value >= 0) {
      setFirstValue(value);
      setResult(value, firstUnit, secondUnit, setSecondValue);
    }
  };

  //handle second inputbox value change
  const handleSecondChange = (value) => {
    if (value >= 0) {
      setSecondValue(value);
      setResult(value, secondUnit, firstUnit, setFirstValue);
    }
  };

  //handle first unit dropdown
  const handleFirstUnitChange = (value) => {
    setFirstUnit(value);
    setResult(firstValue, value, secondUnit, setSecondValue);
  };

  //handle second unit dropdown
  const handleSecondUnitChange = (value) => {
    setSecondUnit(value);
    setResult(secondValue, value, firstUnit, setFirstValue);
  };

  //unit conversion and set result value
  const setResult = (conversionValue, unit1, unit2, setResultValue) => {
    setResultValue((conversionValue * unit1) / unit2);
  };

  return (
    <>
      <h4 className="Header">Length Unit Converter</h4>
      <div className="MainWrapper">
        <div>
          <input
            className="InputBox"
            type="number"
            min="0"
            value={firstValue}
            onChange={(e) => handleFirstChange(e.target.value)}
          />
          <br />
          <select
            className="SelesctBox"
            value={firstUnit}
            onChange={(e) => handleFirstUnitChange(e.target.value)}
          >
            {units.map((unit) => {
              return <option value={unit.value}>{unit.key}</option>;
            })}
          </select>
        </div>
        <div> = </div>
        <div>
          <input
            className="InputBox"
            type="number"
            min="0"
            value={secondValue}
            onChange={(e) => handleSecondChange(e.target.value)}
          />
          <br />
          <select
            className="SelesctBox"
            value={secondUnit}
            onChange={(e) => {
              handleSecondUnitChange(e.target.value);
            }}
          >
            {units.map((unit) => {
              return <option value={unit.value}>{unit.key}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
}
