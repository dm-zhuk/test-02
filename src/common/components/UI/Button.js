import PropTypes from "prop-types";

const Button = ({ string, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {string}
    </button>
  );
};

Button.propTypes = {
  string: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
