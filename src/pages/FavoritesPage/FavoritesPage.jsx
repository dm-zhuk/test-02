import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFavorites } from "../../store/selectors";
import CardCatalog from "../../common/components/CardContent/CardCatalog";
import styles from "./index.module.css";
import CatalogPage from "../CatalogPage/CatalogPage";

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);
  const [FilteredCampers, setFilteredCampers] = useState(favorites);

  return (
    <div className={styles.pageContainer}>
      <CatalogPage
        campers={favorites}
        setFilteredCampers={setFilteredCampers}
      />
      <CardCatalog data={FilteredCampers} />
    </div>
  );
};

export default FavoritesPage;
