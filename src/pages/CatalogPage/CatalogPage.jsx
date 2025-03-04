import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFilter from "../../common/components/CardFilter/CardFilter";
import CardFiltered from "../../common/components/CardContent/CardFiltered";
import { fetchData } from "../../store/dataSlice";
import { getCampers } from "../../store/selectors";
import { scrollTo } from "../../utils/scroller";
import ErrorHandle from "../../utils/error";
import Pagination from "../../utils/context";
import { paginate } from "../../utils/pagination";
import Button from "../../common/components/Buttons/Button";
import styles from "./index.module.css";

const CatalogPage = () => {
  const { campers, isLoading, error } = useSelector(getCampers);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const dispatch = useDispatch();
  const { currentPage, increasePage } = useContext(Pagination);
  const listRef = useRef();

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, campers]);

  useEffect(() => {
    if (Array.isArray(campers)) {
      setFilteredCampers(campers);
    }
  }, [campers]);

  const { cards, isBtnVisible } = paginate(currentPage, filteredCampers);

  const handleLoadMore = () => {
    increasePage();
    scrollTo(listRef);
  };

  if (error) return <ErrorHandle error={error} />;

  return (
    <>
      {!isLoading && !error && (
        <div className={styles.pageContainer}>
          <div className={styles.contentWrapper}>
            <CardFilter cards={campers} setFilteredCards={setFilteredCampers} />
            <CardFiltered data={cards} listRef={listRef} />
          </div>
          {isBtnVisible && (
            <Button
              className={styles.loadMore}
              text="Load more"
              onClick={handleLoadMore}
            />
          )}
        </div>
      )}
    </>
  );
};

export default CatalogPage;
