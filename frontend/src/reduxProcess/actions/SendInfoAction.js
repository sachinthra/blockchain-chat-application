import { SET_SEND_INFORMATION } from "../actionTypes";
export const setSendInfo = (payload) => {
  return { type: SET_SEND_INFORMATION, payload: payload };
};
