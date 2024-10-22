import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Loader from "./common/components/Loader/Loader";
import SharedLayout from "./common/components/layouts/SharedLayout";

const Catalog = React.lazy(() => import("./pages/Catalog"));
const Favorites = React.lazy(() => import("./pages/Favorites"));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
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
            // path="favorites/*"
            element={
              <React.Suspense fallback={<Loader isLoading={true} />}>
                <Favorites />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
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
            {/* <Link to="/favorites/messages">Messages (Favorites)</Link> */}
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not found</h1>
      <p>Page does not exist, please modify your search</p>
      <p>
        <Link to="/">Back to the home page</Link>
      </p>
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
