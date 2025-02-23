import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";
import { Logo } from "../icons/iconsIndex";

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className={styles.navWrapper}>
          <nav>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.navList} ${styles.active}` : styles.navList
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    isActive ? `${styles.navList} ${styles.active}` : styles.navList
                  }>
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive ? `${styles.navList} ${styles.active}` : styles.navList
                  }>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;