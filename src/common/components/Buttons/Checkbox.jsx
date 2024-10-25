import styles from "./index.module.css";

const Checkbox = ({ name, label, icon }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" id={name} name={name} className={styles.hidden} />
      <label htmlFor={name} className={styles.label}>
        {icon}
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
