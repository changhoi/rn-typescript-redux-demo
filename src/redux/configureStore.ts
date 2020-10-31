import { RootStore } from "@receipe/redux-store";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import countReducer from "./modules/count";
import receipeReducer, { receipeSaga } from "./modules/receipe";

const rootReducer = combineReducers<RootStore>({
  count: countReducer,
  receipe: receipeReducer,
});

function* rootSaga() {
  yield all([receipeSaga()]);
}

const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default getStore;
