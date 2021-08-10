import React, { useState } from "react";

// components
import Button from "../components/Button";
import Display from "../components/Display";

// styles
import styles from "./styles.module.scss";

//type
type ValuesProps = {
  displayValue: string;
  clearDisplay: boolean;
  operation: null;
  values: Number[];
  current: number;
};

const Layout: React.FC = () => {
  const [stateInitial, setStateInitial] = useState<ValuesProps>({
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  });

  //function
  function clearMemory() {
    setStateInitial({
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    });
  }
  
  function setOperation(operation: string) {
    console.log(operation);
  }
  function addDigit(digit: string) {
    if (digit === "." && stateInitial.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      stateInitial.displayValue === "0" || stateInitial.clearDisplay;
    const currentValue = clearDisplay ? "" : stateInitial.displayValue;
    const displayValue = currentValue + digit;
    setStateInitial({ ...stateInitial, displayValue, clearDisplay: false });

    if (digit !== ".") {
      const current = stateInitial.current;
      const newValue = parseFloat(displayValue);
      const values = [...stateInitial.values];
      values[current] = newValue;
      console.log(values);
      
      setStateInitial({...stateInitial, displayValue, values });
    }
  }

  return (
    <div className={styles.container}>
      <h1>Calculator</h1>

      <div className={styles.content}>
        <Display value={stateInitial.displayValue} />
        <Button label={"AC"} triple click={clearMemory} />
        <Button label={"/"} operation click={setOperation} />
        <Button label={"7"} click={addDigit} />
        <Button label={"8"} click={addDigit} />
        <Button label={"9"} click={addDigit} />
        <Button label={"*"} operation click={setOperation} />
        <Button label={"4"} click={addDigit} />
        <Button label={"5"} click={addDigit} />
        <Button label={"6"} click={addDigit} />
        <Button label={"-"} operation click={setOperation} />
        <Button label={"1"} click={addDigit} />
        <Button label={"2"} click={addDigit} />
        <Button label={"3"} click={addDigit} />
        <Button label={"+"} operation click={setOperation} />
        <Button label={"0"} click={addDigit} double />
        <Button label={"."} click={addDigit} />
        <Button label={"="} operation click={setOperation} />
      </div>
    </div>
  );
};

export default Layout;
