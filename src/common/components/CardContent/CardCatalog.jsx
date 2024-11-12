import React from "react";
import CardContent from "./CardContent";
import styles from "./index.module.css";

const CardCatalog = ({ data = [], listRef }) => {
  return (
    <ul className={styles.list} ref={listRef}>
      {data.length > 0 ? (
        data.map((item) => <CardContent item={item} key={item.id} />)
      ) : (
        <div className={styles.notFound}>
          Please review your query and try again!
        </div>
      )}
    </ul>
  );
};

export default CardCatalog;
