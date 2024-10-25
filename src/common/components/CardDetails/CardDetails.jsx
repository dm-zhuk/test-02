import { useState } from "react";
import { compileDetails, compileFeatures, formatPrice } from "./helper";
import { Location, Star } from "../icons/icons";
import { iconsOnCard } from "../../../utils/filterIcons";
import Booking from "../Booking/Booking";
import styles from "./index.module.css";

export const CardDetails = ({ card, isDescription, setIsDescription }) => {
  const [activeTab, setActiveTab] = useState("features");

  const handleRatingClick = () => {
    setActiveTab("reviews");
  };

  const handleReadMore = () => {
    setIsDescription((prev) => !prev);
  };

  const cardFeatures = compileFeatures(card.details);
  const detailedInfo = compileDetails(card);

  return (
    <section className={styles.modalContent}>
      <header className={styles.header}>
        <h2>{card.name}</h2>
        <div className={styles.ratingLocation}>
          <div className={styles.rating} onClick={handleRatingClick}>
            <Star />
            <span className={styles.ratingBar}>
              {card.rating} ({card.reviews.length} Reviews)
            </span>
          </div>
          <div className={styles.locationBar}>
            <Location />
            <span>{card.location}</span>
          </div>
        </div>
        <span className={styles.price}>{formatPrice(card.price)}</span>
      </header>
      <div className={styles.gallery}>
        {card.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            className={styles.image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div className={styles.descriptionBar}>
        <p
          className={
            isDescription
              ? styles.description
              : `${styles.description} ${styles.hidden}`
          }>
          {card.description}
        </p>
        <button onClick={handleReadMore} className={styles.buttonMore}>
          {isDescription ? "Read less" : "Read more"}
        </button>
      </div>
      <nav className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "features" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("features")}>
          Features
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "reviews" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}>
          Reviews
        </button>
      </nav>
      <div className={styles.footer}>
        <div className={styles.tabContent}>
          {activeTab === "features" && (
            <div className={styles.features}>
              <ul className={styles.featuresList}>
                {cardFeatures &&
                  cardFeatures.map((feature) => (
                    <li key={feature.name} className={styles.featuresItem}>
                      {iconsOnCard[feature.name]}
                      <span>{feature.value}</span>
                      <span>{feature.name}</span>
                    </li>
                  ))}
              </ul>
              <div className={styles.vehicleDetails}>
                <h3>Vehicle details</h3>
                <ul className={styles.detailsList}>
                  {detailedInfo.map((detail, index) => (
                    <li key={index}>
                      <span className={styles.detailTitle}>{detail.name}</span>
                      <span className={styles.detailValue}>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className={styles.reviews}>
              {card.reviews.map((review, idx) => (
                <div key={idx} className={styles.review}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.letter}>
                      {review.reviewer_name[0]}
                    </span>
                    <div>
                      <h3 className={styles.reviewAuthor}>
                        {review.reviewer_name}
                      </h3>
                      <span className={styles.reviewRating}>
                        {Array.from(
                          { length: review.reviewer_rating },
                          (_, idx) => (
                            <Star key={idx} />
                          )
                        )}
                      </span>
                    </div>
                  </div>
                  <p className={styles.comment}>{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <Booking />
      </div>
    </section>
  );
};
