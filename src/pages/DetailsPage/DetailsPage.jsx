import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperDetails, clearSelectedCamper } from "../../store/dataSlice";
import {
  getSelectedCamper,
  getIsLoading,
  getError,
} from "../../store/selectors";
import { Star } from "../../common/components/icons/iconsIndex";
import { compileVehicleDetails } from "../../common/components/CardDetails/helper";
import {CardBadgeSelected}  from "../../common/components/CardBadge/CardBadgeSelected";
import { placeholderImages } from "../../utils/placeholder";
import StarRating from "../../utils/StarRating";
import Booking from "../../common/components/Booking/Booking";
import Loader from "../../common/components/UI/Loader/Loader";
import { FormattedLocation, formatPrice } from "../../utils/FormatLabel";
import ErrorHandle from "../../utils/error";
import styles from "./index.module.css";

const DetailsPage = () => {
  const [activeTab, setActiveTab] = useState("features");

  const handleRatingClick = () => {
    setActiveTab("reviews");
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector(getSelectedCamper);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperDetails(id));
    }

    return () => {
      dispatch(clearSelectedCamper());
    };
  }, [dispatch, id]);

  if (isLoading) return <Loader isLoading={true} />;
  if (error) return <ErrorHandle error={error} />;

  if (!selectedCamper) {
    return <div>No details available for selected camper</div>;
  }

  const detailedInfo = compileVehicleDetails(selectedCamper);

  return (
    <div className={styles.selectedContainer}>
      <section className={styles.itemWrapper} key={selectedCamper.id}>
        <div className={styles.titleWrapper}>
          <h2>{selectedCamper.name}</h2>
          <div className={styles.itemsSubtitle}>
            <div className={styles.itemSubtitle}>
              <Star />
              <div className={styles.pointer}>
                {selectedCamper.rating}
                <span onClick={handleRatingClick}>
                  ({selectedCamper.reviews?.length || 0} Reviews)
                </span>
              </div>
            </div>
            <FormattedLocation location={selectedCamper.location} />
          </div>
          <h2>{selectedCamper ? formatPrice(selectedCamper.price) : 'N/A'}</h2>
        </div>
        <div className={styles.gallery}>
          {Array.isArray(selectedCamper.gallery) &&
            selectedCamper.gallery.length > 0 && (
              <>
                {selectedCamper.gallery.map((item, index) => (
                  <div key={index} className={styles.imageContainer}>
                    <img
                      src={item.thumb}
                      alt={`gallery ${index + 1}`}
                      className={styles.galleryImage}
                    />
                  </div>
                ))}

                {4 - selectedCamper.gallery.length > 0 &&
                  Array.from({ length: 4 - selectedCamper.gallery.length }).map(
                    (_, index) => (
                      <div
                        key={`placeholder-${index}`}
                        className={styles.imageContainer}>
                        <img
                          src={placeholderImages[index]}
                          alt={`placeholder ${index + 1}`}
                          className={styles.galleryImage}
                        />
                      </div>
                    )
                  )}
              </>
            )}
        </div>
        <p className={styles.description}>{selectedCamper.description}</p>
      </section>
      <section className="detailsContainer">
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
        <div className={styles.tabContentContainer}>
          <div className={styles.tabContent}>
            {activeTab === "features" && (
              <div className={styles.features}>
                <div className={styles.featuresDetails}>
                  <ul className={styles.featuresList}>
                    {selectedCamper &&
                      Object.entries(selectedCamper).map(([key, value]) => (
                        <CardBadgeSelected key={key} detail={[key, value]} />
                      ))}
                  </ul>
                </div>
                <div className={styles.vehicleDetails}>
                  <h3>Vehicle details</h3>
                  <ul className={styles.detailsList}>
                    {detailedInfo.map((detail, index) => (
                      <li key={index}>
                        <span className={styles.detailTitle}>
                          {detail.name}
                        </span>
                        <span className={styles.detailValue}>
                          {detail.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className={styles.reviews}>
                {selectedCamper.reviews.map((review, idx) => (
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
                          <StarRating
                            reviewer_rating={review.reviewer_rating}
                          />
                        </span>
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Booking />
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
