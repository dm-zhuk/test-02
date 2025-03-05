import PropTypes from 'prop-types';

const ErrorHandle = ({ error }) => {
  const errorStyle = {
    padding: '24px 0',
    fontSize: '24px',
    color: 'var(--color-btn)',
  };

  return <>{error && <div style={errorStyle}>{error}</div>}</>;
};

ErrorHandle.propTypes = {
  error: PropTypes.string,
};

export default ErrorHandle;
