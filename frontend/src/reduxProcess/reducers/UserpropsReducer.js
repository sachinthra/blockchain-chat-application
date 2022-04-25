import { LOAD_USER_PROPS } from "../actionTypes";

const initialState = {
  ethereumAddress: null,
  balance: null,
};

const UserpropsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_PROPS:
      return {
        ...state,
        ethereumAddress: action.payload.ethereumAddress,
        balance: action.payload.balance,
      };
    default:
      return state;
  }
};
export default UserpropsReducer;
