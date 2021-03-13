import { all } from "redux-saga/effects";
import search from "./search/sagas";

// Where `all` runs all contents concurrently
export default function* rootSaga() {
  yield all([search()]);
}
