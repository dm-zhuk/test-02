import React from "react";
import styles from "./index.module.css";
import { featureIcons } from "../../../utils/filterIcons";

export const CardBadgeSelected = ({ detail }) => {
  const [key, value] = Array.isArray(detail) ? detail : ["", ""];

  const badge = featureIcons.find((item) => item.name === key);

  if (!badge || !value) return null;

  return (
    <li className={styles.cardBadge}>
      <span className={styles.icon}>{badge.icon}</span>
      <span className={styles.value}>{value}</span>
    </li>
  );
};
