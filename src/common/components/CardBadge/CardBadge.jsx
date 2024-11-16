import React from "react";
import { formatValue } from "../../../utils/FormatLabel";
import { badgeIcons } from "../../../utils/FilterIcons";
import styles from "./index.module.css";

export const CardBadge = ({ detail }) => {
  const [key, value] = Array.isArray(detail) ? detail : ["", ""];

  const badge = badgeIcons.find(({ name }) => name === key);

  if (!badge || value === false) return null;
  const formattedValue = formatValue(value);

  return (
    <li className={styles.cardBadge}>
      <span className={styles.icon}>{badge.icon}</span>
      <span className={styles.value}>{formattedValue || badge.label}</span>
    </li>
  );
};
