/**
 * Cache the value so that we don't have to compute the value every single time
 */
import React, { useState, useMemo } from "react";
const fibonacci = (num) => {
  console.log("This method is called");
  let a = 1,
    b = 0,
    temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
};

const UseMemo = () => {
  const [Num, setNum] = useState(10);
  const [Num2, setNum2] = useState(20);

  const fib = useMemo(() => fibonacci(Num2), []);
  return (
    <div>
      <p>Fib: {fib}</p> <br />
      <p>{Num}</p>
      <button onClick={() => setNum((pre) => pre + 1)}>
        Re-render component
      </button>
      <br />
      <p>{Num2}</p>
      <button onClick={() => setNum2((pre) => pre + 1)}>
        Re-render component
      </button>
    </div>
  );
};

export default UseMemo;
