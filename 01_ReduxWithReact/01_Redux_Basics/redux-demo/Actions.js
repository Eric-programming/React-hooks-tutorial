/**
 * Action send data from app component to the store
 */
const { ADD_EMP, REMOVE_EMP, ADD_ALERT, REMOVE_ALERT } = require("./Consts");
exports.addEmp = (emp) => {
  return { type: ADD_EMP, payload: emp };
};

exports.removeEmp = (id) => {
  return { type: REMOVE_EMP, payload: { id } };
};

exports.addAlert = (alert) => {
  return { type: ADD_ALERT, payload: alert };
};
exports.removeAlert = () => {
  return { type: REMOVE_ALERT, payload: null };
};
