import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardFilter from '~/common/components/CardFilter/CardFilter';
import CardFiltered from '~/common/components/CardContent/CardFiltered';
import { fetchData } from '~/store/dataSlice';
import { getCampers, getIsLoading, getError } from '~/store/selectors';
import { scrollTo } from '~/utils/scroller';
import Pagination from '~/utils/context';
import { paginate } from '~/utils/pagination';
import Button from '~/common/components/Buttons/Button';
import ErrorHandle from '~/utils/error';
import EmptyList from '~/common/components/UI/EmptyList/EmptyList';
import Loader from '~/common/components/UI/Loader/Loader';
import styles from './CatalogPage/index.module.css';

const CamperListPage = ({ filterCondition }) => {
  const dispatch = useDispatch();
  const { campers } = useSelector(getCampers);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const { currentPage, increasePage } = useContext(Pagination);
  const listRef = useRef();

  useEffect(() => {
    if (campers.length === 0 && !isLoading) {
      dispatch(fetchData());
    }
  }, [dispatch, campers, isLoading]);

  useEffect(() => {
    if (Array.isArray(campers)) {
      setFilteredCampers(campers.filter(filterCondition));
    }
  }, [campers, filterCondition]);

  const resetFilters = () => {
    setFilteredCampers(campers);
    if (campers.length === 0) {
      dispatch(fetchData());
    }
  };

  const { cards, isBtnVisible } = paginate(currentPage, filteredCampers);

  const handleLoadMore = () => {
    increasePage();
    scrollTo(listRef);
  };

  if (error) return <ErrorHandle error={error} />;

  if (isLoading) return <Loader isLoading={true} />;

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
          <EmptyList resetFilters={resetFilters} />
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
