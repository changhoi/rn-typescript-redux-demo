import { createStore, combineReducers } from "redux";
import countReducer from "./modules/count";

const rootReducer = combineReducers({ count: countReducer });

const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default getStore;
