import React from "react";

// styles
import styles from "./styles.module.scss";

export default function Display({ value }: any) {
  return <div className={styles.displayName}>{value}</div>;
}
