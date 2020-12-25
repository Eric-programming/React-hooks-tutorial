import React, { useState, useEffect } from "react";
//useEffect basically perform certain operations after something is changed
const UseEffect = () => {
  const [state, setstate] = useState("posts");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {});
    return () => {
      console.log("Clean up");
    };
  }, [state]); //Change when state change
  const clickFunc = (section) => setstate(section);
  return (
    <>
      <div>
        <button onClick={() => clickFunc("posts")}>Posts</button>
        <button onClick={() => clickFunc("comments")}>Comments</button>
        <button onClick={() => clickFunc("todos")}>Todos</button>
      </div>
      Total: {data.length}
    </>
  );
};

export default UseEffect;
