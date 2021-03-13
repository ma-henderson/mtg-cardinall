import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import saga from "./rootSaga.js";
import reducer from "./rootReducer";

// 1) Declare sagamiddlware
const sagaMiddleware = createSagaMiddleware();

// 2) createStore
// 2.1) compose middlewares if necessary
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// 3) run sagaMiddleware on rootSagas
sagaMiddleware.run(saga);

// 4) export withProvider
export const withReduxProvider = (C) => (props) => (
  <Provider store={store}>
    <C {...props} />
  </Provider>
);

// 5) in main.js -> instead of export default App, export it as an arg of 4)
