import React, { useRef, useEffect, useState } from "react";
/**
 * useRef be able to access dom nodes
 */
const UseRef = () => {
  const [state, setstate] = useState(12);
  const buttonRef = useRef(); //1. Access dom elements
  const v = useRef();
  const pre = useRef(0);
  useEffect(() => {
    buttonRef.current.disabled = true;
    v.current.value = "321"; //2. Unable to change the initial state by using current.value
    //and useRef will give you the same ref object on every render.
    pre.current = state; //3. store mutable value and persist
  }, [state]);
  return (
    <div>
      <input
        ref={v}
        value={state}
        onChange={({ target }) => setstate(target.value)}
      />
      <p>
        {state} and previous value was {pre.current}
      </p>
      <button ref={buttonRef}>disabled</button>
    </div>
  );
};

export default UseRef;
