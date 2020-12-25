import React, { memo, useState } from "react";

const Memo = () => {
  const [state, setstate] = useState(0);
  const [state2, setstate2] = useState(0);

  return (
    <>
      <h4 onClick={() => setstate((pre) => pre + 1)}>{state}</h4>
      <Child num={state2} />
      <button onClick={() => setstate2((pre) => pre + 1)}>
        Re-render Child Component
      </button>
    </>
  );
};

const Child = memo(({ num }) => {
  console.log("The Child Component rendered");
  return <p>Child component number: {num}</p>;
});
//memo only rerender the component if the props changed
export default Memo;
