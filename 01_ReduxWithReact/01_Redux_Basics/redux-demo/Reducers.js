/**
 * Reducer is a function that takes state and action as argument and
 * return the updated state
 */
const { ADD_EMP, REMOVE_EMP, ADD_ALERT, REMOVE_ALERT } = require("./Consts");

let tracker = 0;
exports.EmpReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EMP:
      return [...state, { ...payload, id: tracker++ }];
    case REMOVE_EMP:
      return state.filter((e) => e.id != payload.id);
    default:
      return state;
  }
};

exports.AlertReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALERT:
      state.push(payload.message);
      return state;
    case REMOVE_ALERT:
      state.shift();
      return state;
    default:
      return state;
  }
};
