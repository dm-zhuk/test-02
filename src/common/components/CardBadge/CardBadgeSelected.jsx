import PropTypes from 'prop-types';
import { featureIcons } from '~/utils/filterIcons';
import { formatValue } from '~/utils/FormatLabel';
import styles from './index.module.css';

export const CardBadgeSelected = ({ detail }) => {
  const [key, value] = Array.isArray(detail) ? detail : ['', ''];

  const badge = featureIcons.find(({ name }) => name === key);

  if (!badge || value === false) return null;
  const formattedValue = formatValue(value);

  return (
    <li className={styles.cardBadge}>
      <span className={styles.icon}>{badge.icon}</span>
      <span className={styles.value}>{formattedValue || badge.label}</span>
    </li>
  );
};

CardBadgeSelected.propTypes = {
  detail: PropTypes.array.isRequired,
};

export default CardBadgeSelected;
