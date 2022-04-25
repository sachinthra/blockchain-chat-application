import { SET_RECEIVED_MESSAGES } from "../actionTypes";

const initialState = {
  numSentMessages: 0,
  numReceivedMessages: 0,
  messages: [],
};

const ReceivedMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECEIVED_MESSAGES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default ReceivedMessagesReducer;
