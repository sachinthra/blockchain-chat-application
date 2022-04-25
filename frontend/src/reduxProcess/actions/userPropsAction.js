import { LOAD_USER_PROPS } from "../actionTypes";
export const getUserProps = ({ account, balance }) => {
  const payload = {
    ethereumAddress: account,
    balance: balance,
  };

  return { type: LOAD_USER_PROPS, payload: payload };
};
