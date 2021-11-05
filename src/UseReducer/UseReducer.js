import axios from "axios";
import React, { useReducer, useEffect } from "react";
import {
  ADD_NUMBER,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  RESET_NUMBER,
} from "./ActionTypes";
/**
 * useReducer is a hook used for state management in react
 * (alternative option for using useState)
 */
const initState = {
  number: 0,
};
const numberReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_NUMBER:
      return { ...state, number: payload };
    case RESET_NUMBER:
      return initState;
    default:
      return state;
  }
};
const dataInitState = {
  data: null,
  loading: false,
  error: null,
};
const dataReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...initState, data: payload };
    case FETCH_DATA_ERROR:
      return { ...initState, error: payload };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [numState, dispatchNum] = useReducer(numberReducer, initState);
  const [dataState, dispatchData] = useReducer(dataReducer, dataInitState);

  const { data, loading, error } = dataState;
  const { number } = numState;

  useEffect(() => {
    dispatchData({ type: FETCH_DATA_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/todos/2")
      .then((res) => {
        dispatchData({ type: FETCH_DATA_SUCCESS, payload: res.data.title });
      })
      .catch((err) => dispatchData({ type: FETCH_DATA_ERROR, payload: err }));
  }, []);
  return (
    <>
      {number}
      <br />
      <button
        onClick={() => dispatchNum({ type: ADD_NUMBER, payload: number + 1 })}
      >
        Add Number
      </button>
      <br />
      <button onClick={() => dispatchNum({ type: RESET_NUMBER })}>Reset</button>

      <br />
      {loading ? "loading..." : error ? error.message : data}
    </>
  );
};

export default UseReducer;
