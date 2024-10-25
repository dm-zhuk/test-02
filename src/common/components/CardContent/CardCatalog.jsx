import React from "react";
import styles from "./index.module.css";
import CardContent from "./CardContent";

const CardCatalog = ({ data, listRef }) => {
  return (
    <ul className={styles.list} ref={listRef}>
      {data.length > 0 ? (
        data.map((item) => <CardContent item={item} key={item._id} />)
      ) : (
        <li className={styles.notFound}>
          Please review your query and try again.
        </li>
      )}
    </ul>
  );
};

export default CardCatalog;
