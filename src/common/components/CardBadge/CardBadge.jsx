import React from "react";
import styles from "./index.module.css";
import { badgeIcons } from "../../../utils/FilterIcons";

export const CardBadge = ({ detail }) => {
  const [key, value] = Array.isArray(detail) ? detail : ["", ""];

  const badge = badgeIcons.find((item) => item.name === key);

  if (!badge || !value) return null;

  return (
    <li className={styles.cardBadge}>
      <span className={styles.icon}>{badge.icon}</span>
      <span className={styles.value}>{badge.label}</span>
    </li>
  );
};
