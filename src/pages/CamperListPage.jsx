import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardFilter from '../common/components/CardFilter/CardFilter';
import CardFiltered from '../common/components/CardContent/CardFiltered';
import { fetchData } from '../store/dataSlice';
import { scrollTo } from '../utils/scroller';
import Pagination from '../utils/context';
import { paginate } from '../utils/pagination';
import Button from '../common/components/Buttons/Button';
import ErrorHandle from '../utils/error';
import EmptyList from '../common/components/UI/EmptyList/EmptyList';
import styles from './CatalogPage/index.module.css';

const CamperListPage = ({ filterCondition }) => {
  const dispatch = useDispatch();
  const { campers, error } = useSelector(state => state.data);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const { currentPage, increasePage } = useContext(Pagination);
  const listRef = useRef();

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, campers]);

  useEffect(() => {
    if (Array.isArray(campers)) {
      setFilteredCampers(campers.filter(filterCondition));
    }
  }, [campers, filterCondition]);

  const { cards, isBtnVisible } = paginate(currentPage, filteredCampers);

  const handleLoadMore = () => {
    increasePage();
    scrollTo(listRef);
  };

  if (error) return <ErrorHandle error={error} />;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <CardFilter
          cards={filteredCampers}
          setFilteredCards={setFilteredCampers}
        />
        {filteredCampers.length > 0 ? (
          <CardFiltered data={cards} listRef={listRef} />
        ) : (
          <EmptyList />
        )}
      </div>
      {isBtnVisible && (
        <Button
          className={styles.loadMore}
          text="Load more"
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
};

export default CamperListPage;
