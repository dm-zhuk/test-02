import PropTypes from "prop-types";

const Button = ({ text, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
