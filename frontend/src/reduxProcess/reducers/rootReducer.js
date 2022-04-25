import { combineReducers } from "redux";
import LoadSCpropReducer from "./LoadSCpropReducer";
import UserpropsReducer from "./UserpropsReducer";
import AppHandlerReducer from "./AppHandlerReducer";
import SendInfoReducer from "./SendInfoReducer";
import ReceivedMessagesReducer from "./ReceivedMessagesReducer";
const rootReducer = combineReducers({
  LoadSCpropReducer,
  UserpropsReducer,
  AppHandlerReducer,
  SendInfoReducer,
  ReceivedMessagesReducer,
});

export default rootReducer;
