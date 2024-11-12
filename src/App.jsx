import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./common/components/UI/Loader/Loader";
import ErrorFallback from "./utils/Fallback";
import NotFound from "./pages/NotFound";
import SharedLayout from "./common/components/layouts/SharedLayout";
import { ErrorBoundary } from "react-error-boundary";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

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
            path="/details/:id"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <DetailsPage />
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
