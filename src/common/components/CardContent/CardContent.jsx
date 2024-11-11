import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardBadge } from "../CardBadge/CardBadge";
import { getFavorites } from "../../../store/selectors";
import { Star, Location } from "../icons";
import { toggleFavorites } from "../../../store/favoritesSlice";
import FavoriteIcon from "../../../utils/FavoriteIcon";
import { formatPrice } from "../CardDetails/helper";
import Button from "../Buttons/Button";
import styles from "./index.module.css";

const CardContent = ({ item }) => {
  const handleShowMore = () => {
    item._id.open();
    setIsDescription(false);
    setCard(item);
  };

  return (
    <section key={item._id} className={styles.itemWrapper}>
      <div className={styles.img}>
        <img src={item.gallery[0].thumb} alt={item.name} />
      </div>

      <div className={styles.itemContent}>
        <div className={styles.titleWrapper}>
          <div className={styles.itemTitle}>
            <h2>{item.name}</h2>
            <div className={styles.itemTitleRight}>
              {formatPrice(item.price)}
              <FavoriteIcon item={item} />
            </div>
          </div>

          <div className={styles.itemSubtitle}>
            <Star />
            {item.rating}
            <span> ({item.reviews?.length || 0} Reviews)</span>
            <span className={styles.location}>
              <Location width={16} height={16} /> {item.location}
            </span>
          </div>
        </div>
        <p>{item.description}</p>
        <div className={styles.btnWrapper}>
          <ul className={styles.badgeList}>
            {Object.entries(item).map(([key, value]) => (
              <CardBadge key={key} detail={[key, value]} />
            ))}
          </ul>
          <Button text="Show more" onClick={handleShowMore} />
        </div>
      </div>
    </section>
  );
};

export default CardContent;
