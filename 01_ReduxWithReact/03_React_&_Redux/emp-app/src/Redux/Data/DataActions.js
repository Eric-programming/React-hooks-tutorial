import axios from "axios";
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
} from "./DataType";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = (message) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: message,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://api.mocki.io/v1/b043df5a")
      .then((res) => {
        const { data } = res;
        dispatch(fetchDataSuccess(data));
      })
      .catch((err) => {
        const { message } = err;
        dispatch(fetchDataError(message));
      });
  };
};
