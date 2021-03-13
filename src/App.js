import "./App.css";
import SearchResults from "./components/SearchResults";
import { store } from "./store";
import { Provider } from "react-redux";


const App = () => {
  return (<Provider store={store}><SearchResults /></Provider>)
}

// see item 5 in rootSagas.js
export default App;
