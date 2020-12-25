import React, { useState, useContext } from "react";
/**
 *                                  ____>UseContextReset
 *                                  |
 * UseContext==>UseContextProvider==>
 *                                  |____>UseContextDisplay
 *
 * useContext can pass data/methods to children components without pass props
 * to each level of components
 */

const NumberContext = React.createContext(); //Data
const ResetNumberContext = React.createContext(); //Method

const UseContext = () => {
  return (
    <UseContextProvider>
      <UseContextDisplay />
      <br />
      <UseContextReset />
    </UseContextProvider>
  );
};
const UseContextProvider = ({ children }) => {
  const [Number, setNumber] = useState(0);
  const addV = () => setNumber((pre) => pre + 3);
  const reset = () => setNumber(0);
  return (
    <>
      <button onClick={addV}>Add Number by 3</button>
      <br />
      <NumberContext.Provider value={Number}>
        <ResetNumberContext.Provider value={reset}>
          {children}
        </ResetNumberContext.Provider>
      </NumberContext.Provider>
    </>
  );
};

const UseContextDisplay = () => {
  const Number = useContext(NumberContext);
  return <>Functional Component: {Number}</>;
};
const UseContextReset = () => {
  const ResetNumberFunc = useContext(ResetNumberContext);
  return <button onClick={ResetNumberFunc}>Reset</button>;
};

export default UseContext;
