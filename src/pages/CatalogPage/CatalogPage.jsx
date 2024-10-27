import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardFilter from "../../common/components/CardFilter/CardFilter";
import CardCatalog from "../../common/components/CardContent/CardCatalog";
import { fetchData } from "../../store/dataSlice";
import { getCampers } from "../../store/selectors";
import { scrollTo } from "../../utils/scroller";
import ErrorHandle from "../../utils/error";
import Pagination from "../../utils/context";
import { pagination } from "../../utils/pagination";
import Button from "../../common/components/Buttons/Button";
import styles from "./index.module.css";

const CatalogPage = () => {
  const { campers, isLoading, error } = useSelector(getCampers);
  const [filteredCampers, setFilteredCampers] = useState(campers);
  const dispatch = useDispatch();
  const { currentPage, increasePage } = useContext(Pagination);
  const { cards, isVisible } = pagination(currentPage, filteredCampers);
  const listRef = useRef();

  useEffect(() => {
    campers.length && setFilteredCampers(campers);
  }, [campers]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleLoadMore = () => {
    increasePage();
    scrollTo(listRef);
  };
  return (
    <>
      {!isLoading && !error && (
        <div className={styles.pageContainer}>
          <div className={styles.contentWrapper}>
            <CardFilter
              campers={campers}
              setFilteredCampers={setFilteredCampers}
            />
            <CardCatalog data={cards} listRef={listRef} />
          </div>
          {isVisible && (
            <Button
              className={styles.loadMore}
              text="Load more"
              onClick={handleLoadMore}
            />
          )}
        </div>
      )}
      <ErrorHandle error={error} />
    </>
  );
};

export default CatalogPage;
