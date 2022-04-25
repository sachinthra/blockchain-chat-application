import { LOAD_SC_PROPS } from "../actionTypes";

const initialState = {
  contract: null,
  contractAddress: null,
  contractOwner: null,
  usersList: [],
};

const LoadSCpropReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SC_PROPS:
      return {
        ...state,
        contract: action.payload.contract,
        contractAddress: action.payload.contractAddress,
        contractOwner: action.payload.contractOwner,
        usersList: action.payload.usersList,
      };
    default:
      return state;
  }
};
export default LoadSCpropReducer;
