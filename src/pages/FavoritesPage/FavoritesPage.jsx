import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFilter from "../../common/components/CardFilter/CardFilter";
import CardCatalog from "../../common/components/CardContent/CardCatalog";
import { getCampers, getFavorites } from "../../store/selectors";
import { scrollTo } from "../../utils/scroller";
import Pagination from "../../utils/context";
import { paginate } from "../../utils/pagination";
import Button from "../../common/components/Buttons/Button";
import ErrorHandle from "../../utils/error";
import EmptyList from "../../common/components/UI/EmptyList/EmptyList";
import styles from '../CatalogPage/index.module.css';


const FavoritesPage = () => {
  const { campers, isLoading, error } = useSelector(getCampers);
  const favorites = useSelector(getFavorites);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const { currentPage, increasePage } = useContext(Pagination);
  const listRef = useRef();

  useEffect(() => {
    if (Array.isArray(campers)) {
      const favoriteCampers = campers.filter((camper) => favorites.includes(camper.id));
      setFilteredCampers(favoriteCampers);
    }
  }, [campers, favorites]);

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
            <CardFilter cards={filteredCampers} setFilteredCards={setFilteredCampers} />
            {filteredCampers.length > 0 ? (
              <CardCatalog data={cards} listRef={listRef} />
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
      )}
    </>
  );
};

export default FavoritesPage;
