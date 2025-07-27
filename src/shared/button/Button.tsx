import React, { type FC } from "react";
import styles from "./Button.module.css";

const Button: FC = () => {
  return (
    <button className={`${styles.primary} btn btn-primary`}>Submit</button>
  );
};

export default Button;
