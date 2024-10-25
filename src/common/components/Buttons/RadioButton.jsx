import styles from "./index.module.css";

const RadioButton = ({ label, icon, value }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.hidden}
        type="radio"
        id={label}
        name="form"
        value={value}
      />
      <label htmlFor={label} className={styles.label}>
        {icon}
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
