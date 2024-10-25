import React from "react";
import styles from "./index.module.css";

export const Textarea = ({
  rows,
  name,
  placeholder = "",
  pattern,
  onChange,
  error,
}) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        rows={rows}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
