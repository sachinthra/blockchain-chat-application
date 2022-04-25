import { SET_APP_LOADING_TRUE, SET_APP_LOADING_FALSE } from "../actionTypes";

export const setAppLoading = (payload) => {
  if (payload) return { type: SET_APP_LOADING_TRUE };
  return { type: SET_APP_LOADING_FALSE };
};
