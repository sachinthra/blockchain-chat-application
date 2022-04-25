import { SET_SEND_INFORMATION } from "../actionTypes";

const initialState = {
  toUserAddress: "",
  sendMessage: "",
};

const SendInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEND_INFORMATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default SendInfoReducer;
