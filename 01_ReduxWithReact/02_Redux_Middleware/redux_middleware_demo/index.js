const { store } = require("./store");
const {
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataRequest,
} = require("./Actions");
const axios = require("axios").default;
/**
 * Redux thunk allows us to use async functions
 It allows action creator to return an function instead of just an action 
 */
const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://api.mocki.io/v1/b043df5a")
      .then((res) => dispatch(fetchDataSuccess(res.data)))
      .catch((err) => dispatch(fetchDataFailure(err.toJSON().message)));
  };
};
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchData());
