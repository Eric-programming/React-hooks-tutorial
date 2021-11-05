import React, { useState } from "react";

//Can't use useState in the class component

const UseState = () => {
  const [state, setstate] = useState(4); //Render
  const increment = () => setstate((pre) => pre + 1); //override the state using previous value
  const decrement = () => setstate((pre) => pre - 1);

  const [state1, setstate1] = useState(() => {
    console.log("It ran");
    return {
      fullName: "",
      age: 0,
    };
  }); //It will not run every time it re-render the component
  const { fullName, age } = state1;

  const onChangeData = (element) => {
    const { name, value } = element.target;
    setstate1({
      ...state1,
      [name]: value,
    });
  };
  return (
    <>
      <button onClick={decrement}>-</button>
      {state}
      <button onClick={increment}>+</button>
      <br />
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={onChangeData}
      />
      <input type="number" name="age" value={age} onChange={onChangeData} />
      <br />
      <p>name: {fullName}</p>
      <p>age: {age}</p>
    </>
  );
};

export default UseState;
