import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/components/Buttons/Button";
import styles from "./index.module.css";

const DetailsPage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Button
          className={styles.heroBtn}
          type="button"
          text="View Now"
          onClick={() => {
            navigate("catalog");
          }}
        />
      </section>
    </main>
  );
};

export default DetailsPage;
