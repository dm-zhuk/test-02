import { useState } from 'react';
import Emptic from '~/common/components/img/Emptic.jpg';
import Loader from '~/common/components/UI/Loader/Loader';
import Button from '~/common/components/Buttons/Button';
import styles from './index.module.css';

const EmptyList = ({ resetFilters }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    resetFilters();
    setTimeout(() => setLoading(false), 250);
  };

  return (
    <div className={styles.section}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <img className={styles.imageContainer} src={Emptic} alt="Empty" />
          <div className={styles.noItemsText}>
            <h2 className={styles.title}>Hard choice?</h2>
            <p className={styles.message}>
              Keep selecting 💕 to review your favorite campervans later on
            </p>
          </div>
          <Button
            text="Back to selection"
            onClick={handleClick}
            style={{ padding: '16px 4px' }}
          />
        </>
      )}
    </div>
  );
};

export default EmptyList;
