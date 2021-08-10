import React from "react";

// styles
import styles from "./styles.module.scss";

interface ButtonProps {
  label: string;
  operation?: boolean;
  double?: boolean;
  triple?: boolean;
  click: (label: string) => void | undefined;
}

const Button = ({ label, operation, double, triple, click }: ButtonProps) => {
  return (
    <>
      <button
        className={`${styles.button}
        ${double ? styles.double : ""}
        ${triple ? styles.triple : ""}
        ${operation ? styles.operation : ""}
       `}
       onClick={() => click(label)}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
