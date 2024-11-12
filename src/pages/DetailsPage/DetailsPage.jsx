import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperDetails, clearSelectedCamper } from "../../store/dataSlice";
import {
  getSelectedCamper,
  getIsLoading,
  getError,
} from "../../store/selectors";
import Loader from "../../common/components/UI/Loader/Loader";
import ErrorHandle from "../../utils/error";
import styles from "./index.module.css";

const DetailsPage = () => {
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
    return <div>No Camper Details Found</div>;
  }

  return (
    <div className={styles.detailsPage}>
      <h1>{selectedCamper.name}</h1>
      <p>{selectedCamper.description}</p>
      {selectedCamper.gallery && (
        <img
          src={selectedCamper.gallery[0]?.thumb || ""}
          alt={selectedCamper.name}
        />
      )}
    </div>
  );
};

export default DetailsPage;
