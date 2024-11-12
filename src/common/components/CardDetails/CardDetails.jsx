import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCamperDetails,
  clearSelectedCamper,
} from "../../../store/dataSlice";
import {
  getSelectedCamper,
  getIsLoading,
  getError,
} from "../../../store/selectors";

const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const camper = useSelector(getSelectedCamper);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));

    return () => {
      dispatch(clearSelectedCamper());
    };
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return <p>No details available 😔</p>;

  return (
    <div className="card-details">
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <ul>
        {camper.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default CardDetails;

/* 
const CardDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const camper = useSelector(getSelectedCamper);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));

    return () => {
      dispatch(clearSelectedCamper());
    };
  }, [dispatch, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return <p>No details available 😔</p>;

  return (
    <div className="card-details">
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <ul>
        {camper.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};
 */
