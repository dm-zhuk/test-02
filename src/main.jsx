import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./utils/Fallback";
import { persistor, store } from "./store/store";
import { PaginationProvider } from "./utils/context";
import { Normalize } from "styled-normalize";
import { App } from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PaginationProvider>
            <Normalize />
            <React.Suspense fallback={<div>Loading...</div>}>
              <App />
            </React.Suspense>
          </PaginationProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
