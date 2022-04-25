import { SET_APP_LOADING_TRUE, SET_APP_LOADING_FALSE } from "../actionTypes";

const initialState = {
  isLoading: false,
  reason: "",
};

const appLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_APP_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default appLoadingReducer;
