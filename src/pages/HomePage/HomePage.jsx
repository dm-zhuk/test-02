import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            navigate("catalog");
          }}>
          View Now
        </button>
      </section>
    </main>
  );
};

export default HomePage;
