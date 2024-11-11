import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/components/Buttons/Button";
import styles from "./index.module.css";
// test
// import { TestComponent } from "./test";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <Button
          type="button"
          text="View Now"
          onClick={() => {
            navigate("catalog");
          }}
        />
        {/* <TestComponent /> */}
      </section>
    </main>
  );
};

export default HomePage;
