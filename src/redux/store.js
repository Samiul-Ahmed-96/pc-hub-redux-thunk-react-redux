import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import cartCounter from "./middlewares/cartCounter";
import rootReducer from "./reducers/rootReducer";


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);

export default store;
