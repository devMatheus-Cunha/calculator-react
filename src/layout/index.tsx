import React from "react";
import Button from "../components/Button";

// styles
import styles from "./styles.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Calculator</h1>

      <div className={styles.content}>
        <Button label={"AC"}/>
        <Button label={"/"}/>
        <Button label={"7"}/>
        <Button label={"8"}/>
        <Button label={"9"}/>
        <Button label={"4"}/>
        <Button label={"5"}/>
        <Button label={"6"}/>
        <Button label={"1"}/>
        <Button label={"2"}/>
        <Button label={"3"}/>
        <Button label={"+"}/>
        <Button label={"0"}/>
        <Button label={"."}/>
        <Button label={"="}/>
      </div>
    </div>
  );
};

export default Layout;
