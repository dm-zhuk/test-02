import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBadge } from "../CardBadge/CardBadge";
import { Star } from "../icons";
import { FormattedLocation, formatPrice } from "../../../utils/FormatLabel";
import FavoriteIcon from "../../../utils/FavoriteIcon";
import Button from "../Buttons/Button";
import styles from "./index.module.css";

const CardContent = ({ item }) => {
  const navigate = useNavigate();

  const handleShowMore = (camperId) => {
    navigate(`/details/${camperId}`);
  };

  return (
    <section key={item.id} className={styles.itemWrapper}>
      <div className={styles.img}>
        <img src={item.gallery?.[0]?.thumb || ""} alt={item.name || "Camper"} />
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

          <div className={styles.itemsSubtitle}>
            <div className={styles.itemSubtitle}>
              <Star />
              {item.rating}({item.reviews?.length || 0} Reviews)
            </div>
            <FormattedLocation location={item.location} />
          </div>
        </div>
        <p>{item.description}</p>
        <ul className={styles.badgeList}>
          {Object.entries(item).map(([key, value]) => (
            <CardBadge key={key} detail={[key, value]} />
          ))}
        </ul>
        <Button text="Show more" onClick={() => handleShowMore(item.id)} />
      </div>
    </section>
  );
};

export default CardContent;
