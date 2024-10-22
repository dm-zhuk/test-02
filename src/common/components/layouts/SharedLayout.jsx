import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.css";
import Logo from "../img/Logo.png";

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img className={styles.logo} src={Logo} alt="logotype" />
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

/* 
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.css";
import favicon from "../img/favicon.png";

const SharedLayout = () => {
  return (
    <>
      <div className={styles.sharedHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerNav}>
            <img src={favicon} alt="Logo" width="36" height="auto" />
            <NavLink to="/" className={styles.headerLogo}>
              RENT-A-<span className={styles.headerLogoAccent}>CAMPER</span>
            </NavLink>

            <ul className={styles.headerNavList}>
              <li className={styles.headerNavItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.headerNavItemLink} ${styles.active}`
                      : styles.headerNavItemLink
                  }>
                  Home
                </NavLink>
              </li>
              <li className={styles.headerNavItem}>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.headerNavItemLink} ${styles.active}`
                      : styles.headerNavItemLink
                  }>
                  Catalog
                </NavLink>
              </li>
              <li className={styles.headerNavItem}>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.headerNavItemLink} ${styles.active}`
                      : styles.headerNavItemLink
                  }>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.headerContacts}>
            <ul className={styles.headerContactsList}>
              <li>
                <a
                  href="mailto:info@camperrental.com"
                  className={styles.headerContactsLink}>
                  info@camperrental.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+380631234567"
                  className={styles.headerContactsLink}>
                  +380 (63) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.sharedPageCtnr}>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
 */
