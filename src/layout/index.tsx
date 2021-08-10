import React from "react";

// components
import Button from "../components/Button";
import Display from "../components/Display";
// import data
import labelsButton from "./data";

// styles
import styles from "./styles.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Calculator</h1>

      <div className={styles.content}>
        <Display value={100} />
        {labelsButton.map((label) => (
          <Button label={label} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
