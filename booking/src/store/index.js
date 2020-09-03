import { createStore, combineReducers } from "redux";
import rentals from "./reducers/rentals";

export function initStore() {
  const reducers = combineReducers({
    rentals,
    data1: (state = [], action) => {
      if ((action.type = "FETCH_DATA")) {
        return ["1", "2", "3"];
      } else {
        return state;
      }
    },
    data2: () => ["a", "b", "c"],
  });
  const reduxExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, reduxExtension);
  return store;
}
