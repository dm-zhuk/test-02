import React from "react";
import styles from "./index.module.css";

export const Input = ({
  type,
  name,
  placeholder = "",
  pattern,
  onChange,
  error,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
