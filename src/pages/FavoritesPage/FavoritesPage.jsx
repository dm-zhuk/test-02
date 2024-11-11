import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../../store/selectors";
import CardFilter from "../../common/components/CardFilter/CardFilter";
import CardCatalog from "../../common/components/CardContent/CardCatalog";
import styles from "./index.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);
  const [FilteredCampers, setFilteredCampers] = useState(favorites);

  return (
    <div className={styles.pageContainer}>
      <CardFilter campers={favorites} setFilteredCampers={setFilteredCampers} />
      <CardCatalog data={FilteredCampers} />
    </div>
  );
};

export default FavoritesPage;
