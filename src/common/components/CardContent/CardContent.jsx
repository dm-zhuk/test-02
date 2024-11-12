import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBadge } from "../CardBadge/CardBadge";
import { Star, Location } from "../icons";
import { formatPrice } from "../CardDetails/helper";
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
