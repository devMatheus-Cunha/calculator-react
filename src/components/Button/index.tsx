import React from "react";

// styles
import styles from "./styles.module.scss";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <>
      <button className={styles.button}>{label}</button>
    </>
  );
};

export default Button;
