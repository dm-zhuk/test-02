import React from "react";
import { useNavigate } from "react-router-dom";
import Hero_2x_squooshed from "../../common/components/img/Hero_2x_squooshed.webp";
import styles from "components/Home/index.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.h1}>Campers of your dreams</h1>
        <h2 className={styles.h2}>
          You can find everything you want in our catalog
        </h2>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            navigate("catalog");
          }}>
          View Now
        </button>
      </section>
      <img
        className={styles.imgThumb}
        src={Hero_2x_squooshed}
        alt="Camper view"
      />
    </main>
  );
};

export default HomePage;
