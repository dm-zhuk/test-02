import { createSelector } from "reselect";

// Base state selector
export const getCampersState = (state) => state?.data || {};

// Selector for fetching all campers along with loading and error states
export const getCampers = createSelector([getCampersState], (data) => ({
  campers: data.campers || [],
  isLoading: data.isLoading || false,
  error: data.error || null,
}));

// Selector for fetching the details of a selected camper
export const getSelectedCamper = createSelector(
  [getCampersState],
  (data) => data.selectedCamper || null
);

// Selector for fetching favorite items
export const getFavorites = (state) => state?.favorites || [];

// Standalone selectors for loading and error states
export const getIsLoading = createSelector(
  [getCampersState],
  (data) => data.isLoading || false
);

export const getError = createSelector(
  [getCampersState],
  (data) => data.error || null
);
