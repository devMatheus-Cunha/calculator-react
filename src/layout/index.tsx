import React from "react";

// components
import Button from "../components/Button";
import Display from "../components/Display";

// styles
import styles from "./styles.module.scss";

const Layout: React.FC = () => {
  //function
  function clearMemory() {
    console.log("Limpar");
  }
  function setOperation(operation: string) {
    console.log(operation);
  }
  function addDigit(value: string) {
    console.log(value);
  }

  return (
    <div className={styles.container}>
      <h1>Calculator</h1>

      <div className={styles.content}>
        <Display value={100} />
        <Button label={"AC"} triple click={() => clearMemory()} />
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
