import { createStore } from "redux";

import rootReducer from "./reduxProcess/reducers/rootReducer";

const store = createStore(rootReducer);

export default store;
