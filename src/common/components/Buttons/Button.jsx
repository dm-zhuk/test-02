import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, onClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;