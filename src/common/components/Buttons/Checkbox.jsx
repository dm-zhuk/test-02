import React from "react";
import styles from "./Button.module.css";

const Checkbox = ({ name, label, icon, iconSize = 32, checked, onChange }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.hidden}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name} className={styles.label}>
        <span
          className={styles.icon}
          style={{ width: iconSize, height: iconSize }}>
          {React.cloneElement(icon, { width: iconSize, height: iconSize })}
        </span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;