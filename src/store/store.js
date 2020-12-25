import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { MyReducer } from "./reducers";

const store = createStore(MyReducer, composeWithDevTools());

export default store;
