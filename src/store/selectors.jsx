import { createSelector } from "reselect";

export const getCampersState = (state) => state?.data || {};

export const getCampers = createSelector(
  [getCampersState],
  (data) => ({
    campers: data.campers || [],
    isLoading: data.isLoading || false,
    error: data.error || null,
  })
);

export const getSelectedCamper = createSelector(
  [getCampersState],
  (data) => data.selectedCamper || null
);

export const getFavorites = (state) => state?.favorites || [];

export const getIsLoading = createSelector(
  [getCampersState],
  (data) => data.isLoading || false
);

export const getError = createSelector(
  [getCampersState],
  (data) => data.error || null
);