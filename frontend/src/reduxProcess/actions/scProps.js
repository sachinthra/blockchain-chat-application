import { LOAD_SC_PROPS } from "../actionTypes";

export const getSCprops = (data) => {
  const payload = {
    contract: data.contract,
    contractAddress: data.contract.address,
    contractOwner: data.chatWei[0],
    usersList: data.chatWei[1],
  };

  return { type: LOAD_SC_PROPS, payload: payload };
};
