const {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} = require("./Consts");

const init = {
  loading: false,
  data: [],
  error: null,
};
const dataReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA_FAILURE:
      return { ...init, error: payload };
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...init, data: payload };
    default:
      return;
  }
};
module.exports.dataReducer = dataReducer;
