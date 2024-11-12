export const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" style={{ margin: "120px" }}>
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary} style={{ margin: "64px" }}>
      Try again
    </button>
  </div>
);
