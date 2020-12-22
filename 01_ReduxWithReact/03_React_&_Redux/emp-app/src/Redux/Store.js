import { applyMiddleware, combineReducers, createStore } from "redux";
import EmpReducer from "./Emp/EmpReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import DataReducer from "./Data/DataReducers";
const reducers = combineReducers({ Emp: EmpReducer, Data: DataReducer });
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
