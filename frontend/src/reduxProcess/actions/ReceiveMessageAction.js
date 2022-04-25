import { SET_RECEIVED_MESSAGES } from "../actionTypes";
import { ethers } from "ethers";

function createData(content, timestamp, sender) {
  return { content, timestamp, sender };
}
export const setReceivedMessages = (payload) => {
  const messages = [];
  for (let i = 0; i < payload.numReceivedMessages; i++) {
    var date = new Date(parseInt(payload.timestamp[i]._hex, 16) * 1000);

    console.log(date.toLocaleString());
    messages.push(
      createData(
        ethers.utils.parseBytes32String(payload.content[i]),
        date.toLocaleString(),
        payload.sender[i]
      )
    );
  }
  const data = {
    numSentMessages: payload.numSentMessages,
    numReceivedMessages: payload.numReceivedMessages,
    messages: messages,
  };
  return { type: SET_RECEIVED_MESSAGES, payload: data };
};
