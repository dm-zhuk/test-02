import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./common/components/UI/Loader/Loader";
import NotFound from "./pages/NotFound";
import SharedLayout from "./common/components/layouts/SharedLayout";
import { ErrorBoundary } from "react-error-boundary";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export const App = () => {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <CatalogPage />
              </ErrorBoundary>
            }
          />
          <Route
            path="/favorites"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <FavoritesPage />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
