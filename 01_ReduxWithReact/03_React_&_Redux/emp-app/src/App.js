import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import AddEmp from "./Components/AddEmp";
import store from "./Redux/Store";
import EmpListwithHooks from "./Components/EmpListwithHooks";
//This will provide store to every component in our application
const App = () => {
  return (
    <>
      <Provider store={store}>
        <AddEmp />
        {/* <EmpList /> */}
        <EmpListwithHooks />
      </Provider>
    </>
  );
};

export default App;
