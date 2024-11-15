import React from "react";
import styles from "./index.module.css";
import { featureIcons } from "../../../utils/filterIcons";

export const CardBadgeSelected = ({ detail }) => {
  const [key, value] = Array.isArray(detail) ? detail : ["", ""];

  const badge = featureIcons.find(({ name }) => name === key);

  if (!badge) return null;

  return (
    <li className={styles.cardBadge}>
      <span className={styles.icon}>{badge.icon}</span>
      <span className={styles.value}>{value || badge.label}</span>
    </li>
  );
};
