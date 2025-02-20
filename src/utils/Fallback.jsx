import Button from "../common/components/Buttons/Button";
import PropTypes from 'prop-types';
export const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" style={{ margin: "120px" }}>
    <h2>Check this one out, mate:</h2>
    <pre style={{ margin: "32px 0" }}>{error.message}</pre>
    <Button onClick={resetErrorBoundary} text="Try again" />
  </div>
);

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};