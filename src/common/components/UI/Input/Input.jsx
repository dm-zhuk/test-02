import PropTypes from "prop-types";
import styles from "./index.module.css";

export const Input = ({ type, name, value, placeholder, onChange, onFocus, onBlur, error }) => {
  const handleFocus = (e) => {
    e.target.placeholder = "";
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.placeholder = placeholder;
    }
    if (onBlur) onBlur(e);
  };

  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={value ? "" : placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={error ? styles.error : styles.input}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default Input;