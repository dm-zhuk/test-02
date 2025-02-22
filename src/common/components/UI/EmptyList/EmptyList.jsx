import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Emptic from '../../img/Emptic.jpg';
import Button from '../../Buttons/Button';
import styles from './index.module.css';

const EmptyList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.section}
    >
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.imageContainer}
        src={Emptic}
        alt="Emptic"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={styles.noItemsText}
      >
        <h2 className={styles.title}>Hard choice?</h2>
        <p className={styles.message}>
          Keep clicking the hearts to review your favorite campervans later on
        </p>
      </motion.div>
      <Button text="↩︎  to catalog" onClick={handleClick}  style={{ padding: "16px 4px" }} />
    </motion.div>
  );
};

export default EmptyList;