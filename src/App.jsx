import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./common/components/UI/Loader/Loader";
import NotFound from "./pages/NotFound";
import SharedLayout from "./common/components/layouts/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
