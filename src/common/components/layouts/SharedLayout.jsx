import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";
import { Logo } from "../icons/spriteSvg";

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navList} ${styles.active}`
                    : styles.navList
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navList} ${styles.active}`
                    : styles.navList
                }>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
