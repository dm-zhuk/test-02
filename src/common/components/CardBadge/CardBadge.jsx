import React from "react";
import { iconsOnCard } from "../../../utils/filterIcons";
import styles from "./index.module.css";

export const CardBadge = ({ detail }) => {
  const [name, value] = detail;
  return (
    <li className={styles.cardBadge}>
      <span className={styles.icon}>{iconsOnCard[name]}</span>
      <span className={styles.value}>{value}</span>
      {name}
    </li>
  );
};
