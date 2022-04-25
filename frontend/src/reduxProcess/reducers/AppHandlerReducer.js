import {
  SET_APP_HANDLER_POSITIVE,
  SET_APP_HANDLER_NEGATIVE,
} from "../actionTypes";

const initialState = {
  statusColor: "orange",
  statusMessage: "Loading",
};

const AppHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_HANDLER_POSITIVE:
      return {
        ...state,
        statusColor: "green",
        statusMessage: action.payload,
      };
    case SET_APP_HANDLER_NEGATIVE:
      return {
        ...state,
        statusColor: "red",
        statusMessage: action.payload,
      };
    default:
      return state;
  }
};
export default AppHandlerReducer;
