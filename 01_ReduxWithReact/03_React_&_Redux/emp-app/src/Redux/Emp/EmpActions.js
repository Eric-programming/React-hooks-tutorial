import { ADD_EMP, REMOVE_EMP } from "./EmpType";

export const addEmp = (emp) => {
  return {
    type: ADD_EMP,
    payload: emp,
  };
};

export const removeEmp = (id) => {
  return { type: REMOVE_EMP, payload: { id } };
};
