import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartCounter from "./middlewares/cartCounter";
import rootReducer from "./reducers/rootReducer";


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter,logger,thunk))
);

export default store;
