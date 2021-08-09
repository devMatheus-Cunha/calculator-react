import React from "react";

// styles
import styles from "./styles.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Calculator</h1>

      <div className={styles.content}></div>
    </div>
  );
};

export default Layout;
