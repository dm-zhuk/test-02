import PropTypes from "prop-types";
import styles from "./index.module.css";

export const Textarea = ({
  name,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  error,
  rows,
}) => {
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
      <textarea
        name={name}
        value={value}
        placeholder={value ? "" : placeholder}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={rows}
        className={error ? styles.errorTextarea : styles.textarea}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  rows: PropTypes.number,
};

export default Textarea;