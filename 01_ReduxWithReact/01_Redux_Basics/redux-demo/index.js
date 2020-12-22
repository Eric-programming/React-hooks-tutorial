const { Employee, Alert } = require("./Class");
const { addEmp, removeEmp, addAlert, removeAlert } = require("./Actions");
const { EmpReducer, AlertReducer } = require("./Reducers");
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const rootReducers = combineReducers({
  Emp: EmpReducer,
  Alert: AlertReducer,
});
const store = createStore(rootReducers);
//=========================================
//Demonstration
//=========================================
console.log("store", store.getState());
const unSub = store.subscribe(() =>
  console.log("Subscribe to the store", store.getState())
);
store.dispatch(addEmp(new Employee("Eric", "SDE II")));
store.dispatch(addAlert(new Alert("Alert is working")));
store.dispatch(addEmp(new Employee("Tom", "SDE")));
store.dispatch(removeEmp(0));
setTimeout(() => {
  store.dispatch(removeAlert());
}, 2000);

unSub();
