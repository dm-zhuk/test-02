export const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" style={{ margin: "120px", color: "var(--color-btn)" }}>
    <h2>Check this one out, mate:</h2>
    <pre style={{ margin: "32px 0" }}>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);
