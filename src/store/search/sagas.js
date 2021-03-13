// Saga is a middleware between Actions and Reducer
// Important concepts to know:
// Saga:  long, involved story, account series of incidents
// Generator Functions, WatcherSagas, WorkerSagas
// Side-effects' (blocking vs non-blocking) interaction with fn*
// https://medium.com/nmc-techblog/the-power-of-redux-saga-3dbd26a08b49

// ========= Code Start =========
// Top-down logic level
import { fork, call, put, takeLatest } from "redux-saga/effects";
import {
  RECEIVE_SEARCH_CARDS_FAIL,
  RECEIVE_SEARCH_CARDS_SUCCESS,
  REQUEST_SEARCH_CARDS,
} from "./actions";

// Auxiliary (ie API endpoints)
const handleSearch = async (searchStr) => {
  console.log("API", searchStr);
  const searchURI = "https://api.magicthegathering.io/v1/cards?name=";
  const response = await fetch(`${searchURI}${searchStr}`);
  const data = await response.json()
  return data["cards"]
};

// top of stack
export default function* search() {
  console.log('top of stack')
  yield fork(watchSearch);
}

// Watchers
function* watchSearch() {
  console.log("watcher");
  yield takeLatest(REQUEST_SEARCH_CARDS, requestSearchCardsSaga);
}

// Workers
function* requestSearchCardsSaga({ payload: searchStr }) {
  const result = yield call(handleSearch, searchStr);
  try {
    yield put({ type: RECEIVE_SEARCH_CARDS_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: RECEIVE_SEARCH_CARDS_FAIL, payload: error });
  }
}
