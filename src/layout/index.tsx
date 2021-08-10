/* eslint-disable no-eval */
import React, { useState } from "react";

// components
import Button from "../components/Button";
import Display from "../components/Display";

// styles
import styles from "./styles.module.scss";

//type
type stateInitialProps = {
  displayValue: any;
  clearDisplay: boolean;
  operation: string;
  values: Number[];
  current: number;
};

const Layout: React.FC = () => {
  const [stateInitial, setStateInitial] = useState<stateInitialProps>({
    displayValue: "0",
    clearDisplay: false,
    operation: "",
    values: [0, 0],
    current: 0,
  });

  //functions
  function clearMemory() {
    setStateInitial({
      displayValue: "0",
      clearDisplay: false,
      operation: "",
      values: [0, 0],
      current: 0,
    });
  }

  function setOperation(operation: string) {
    if (stateInitial.current === 0) {
      setStateInitial({
        ...stateInitial,
        operation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = operation === "=";
      const currentOperation = stateInitial.operation;
      const values = [...stateInitial.values];

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (e) {
        values[0] = stateInitial.values[0];
      }

      values[1] = 0;

      setStateInitial({
        ...stateInitial,
        displayValue: values[0],
        operation: equals ? "" : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }

  function addDigit(digit: string) {
    if (digit === "." && stateInitial.displayValue.includes(".")) {
      return;
    }
    
    const clearDisplay =
      stateInitial.displayValue === "0" || stateInitial.clearDisplay;
    const currentValue = clearDisplay ? "" : stateInitial.displayValue;
    const displayValue = currentValue + digit;
    setStateInitial({
      ...stateInitial,
      displayValue,
      clearDisplay: false,
    });

    if (digit !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...stateInitial.values];
      values[stateInitial.current] = newValue;

      setStateInitial({ ...stateInitial, displayValue, values });
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
