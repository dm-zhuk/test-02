import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Emptic from '../../img/Emptic.jpg';
import Loader from '../Loader/Loader';
import Button from '../../Buttons/Button';
import styles from './index.module.css';

const EmptyList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/catalog');
    }, 250);
  };

  return (
    <div className={styles.section}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <img className={styles.imageContainer} src={Emptic} alt="Emptic" />
          <div className={styles.noItemsText}>
            <h2 className={styles.title}>Hard choice?</h2>
            <p className={styles.message}>
              Keep clicking the hearts to review your favorite campervans later
              on
            </p>
          </div>
          <Button
            text="Back to catalog"
            onClick={handleClick}
            style={{ padding: '16px 4px' }}
          />
        </>
      )}
    </div>
  );
};

export default EmptyList;
