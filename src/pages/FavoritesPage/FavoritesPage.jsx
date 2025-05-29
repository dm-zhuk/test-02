import CamperListPage from '../CamperListPage';
import { useSelector } from 'react-redux';
import { getFavorites } from '~/store/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);

  // Define filter condition for Favorites
  const filterCondition = camper => favorites.includes(camper.id);

  return (
    <CamperListPage
      filterCondition={filterCondition} // Pass filter condition
    />
  );
};

export default FavoritesPage;
