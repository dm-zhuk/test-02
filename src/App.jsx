import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Loader from "./common/components/Loader/Loader";
import SharedLayout from "./common/components/layouts/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound";

const Catalog = React.lazy(() => import("./pages/Catalog"));
const Favorites = React.lazy(() => import("./pages/Favorites"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="catalog"
          element={
            <React.Suspense fallback={<Loader isLoading={true} />}>
              <Catalog />
            </React.Suspense>
          }
        />
        <Route
          path="favorites"
          element={
            <React.Suspense fallback={<Loader isLoading={true} />}>
              <Favorites />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

/*
import { Routes, Route } from "react-router-dom";
import Loader from "./common/components/Loader/Loader";
import SharedLayout from "./common/components/layouts/SharedLayout";
 
const App = () => {
  const HomePage = React.lazy(() => import("./pages/HomePage"));
  // const HomePage = React.lazy(() => import("pages/HomePage"));
  // const CatalogPage = React.lazy(() => import("pages/CatalogPage"));
  // const FavoritesPage = React.lazy(() => import("pages/FavoritesPage"));

  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
 */
