import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./DataType";

const init = {
  loading: false,
  data: null,
  error: null,
};

const DataReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_DATA_ERROR:
      return { ...init, error: action.payload };
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...init,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default DataReducer;
