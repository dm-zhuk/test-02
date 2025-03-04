import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Logo } from '../icons/iconsIndex';

const SharedLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.contentWrapper}>
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
                      isActive
                    ? `${styles.navList} ${styles.active}`
                    : styles.navList
                  }
                  >
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
                  }
                  >
                    Catalog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                      isActive
                    ? `${styles.navList} ${styles.active}`
                    : styles.navList
                  }
                  >
                    Favorites
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerContacts}>
            <ul className={styles.headerContactsList}>
              <li>
                <a
                  href="mailto:info@camperrental.com.ua"
                  className={styles.headerContactsLink}
                  >
                  info@camperrental.com.ua
                </a>
              </li>
              <li>
                <a
                  href="tel:+380637654321"
                  className={styles.headerContactsLink}
                  >
                  +380 (63) 765-43-21
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
