import React, { memo, useState, useCallback } from "react";

const UseCallBack = () => {
  const [state, setstate] = useState(0);
  const [state2, setstate2] = useState(0);
  const memoizeCallBack = useCallback(() => setstate((pre) => pre + 1), []);
  return (
    <>
      <h4 onClick={() => setstate((pre) => pre + 1)}>{state}</h4>
      <Child num={state2} changeNum={memoizeCallBack} />
      <button onClick={() => setstate2((pre) => pre + 1)}>
        Re-render Child Component
      </button>
    </>
  );
};

const Child = memo(({ num, changeNum }) => {
  console.log("The Child Component rendered");

  return <p onClick={() => changeNum()}>Child component number: {num}</p>;
});
export default UseCallBack;
