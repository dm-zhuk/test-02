import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardBadge } from "../CardBadge/CardBadge";
// import { CardDetails } from "../CardDetails/CardDetails";
// import { Modal } from "../UI/Modal/Modal";
import { getFavorites } from "../../../store/selectors";
import { Star, Location, Favorite } from "../icons/spriteSvg";
import { toggleFavorites } from "../../../store/favoritesSlice";
import { formatPrice } from "../CardDetails/helper";
import Button from "../Buttons/Button";
import styles from "./index.module.css";

const CardContent = ({ item }) => {
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();
  const handleFavorites = () => dispatch(toggleFavorites(item));
  const isFavorite = favorites.find((element) => element._id === item._id);

  const [card, setCard] = useState();
  const [isDescription, setIsDescription] = useState(true);
  const modalRef = useRef();

  const handleShowMore = (card) => {
    modalRef.current.open();
    setIsDescription(false);
    setCard(card);
  };

  return (
    <li key={item._id} className={styles.itemWrapper}>
      {/* <Modal ref={modalRef}>
        <CardDetails
          card={card}
          isDescription={isDescription}
          setIsDescription={setIsDescription}
        />
      </Modal> */}
      <div className={styles.img}>
        <img src={item.gallery[0].thumb} alt="" />
      </div>

      <div className={styles.itemContent}>
        <div className={styles.itemTitle}>
          <h2>{item.name}</h2>
          <span {...item.price} className={styles.h2}>
            {formatPrice(item.price)}
            <Favorite
              className={isFavorite ? styles.active : ""}
              onClick={handleFavorites}
            />
          </span>
        </div>

        <div className={styles.itemSubtitle}>
          <Star />
          {item.rating}
          <span> ({`${item.reviews?.length}`} Reviews)</span>
          <span className={styles.location}>
            <Location /> {item.location}
          </span>
        </div>
        <p>{item.description}</p>
        <ul className={styles.detailList}>
          {item.details &&
            Object.entries(item.details).map((detail, index) => (
              <CardBadge detail={detail} key={index} />
            ))}
        </ul>
        <Button text="Show more" onClick={() => handleShowMore(item)} />
      </div>
    </li>
  );
};

export default CardContent;
