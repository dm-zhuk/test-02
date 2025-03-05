import { Grid } from 'react-loader-spinner';
import styles from './index.module.css';

const Loader = ({ isLoading = false }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div className={styles.loaderContainer}>
      <Grid
        visible={true}
        height={80}
        width={80}
        color="var(--color-btn)"
        aria-label="grid-loading"
        radius={12.5}
        wrapperStyle={{}}
        wrapperClassName="loader"
      />
    </div>
  );
};

export default Loader;
