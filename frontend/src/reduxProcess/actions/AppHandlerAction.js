import {
  SET_APP_HANDLER_POSITIVE,
  SET_APP_HANDLER_NEGATIVE,
} from "../actionTypes";
export const setAppHandler = ({ status, message }) => {
  if (status == true) {
    return { type: SET_APP_HANDLER_POSITIVE, payload: message };
  } else {
    return { type: SET_APP_HANDLER_NEGATIVE, payload: message };
  }
};
