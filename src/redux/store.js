import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
