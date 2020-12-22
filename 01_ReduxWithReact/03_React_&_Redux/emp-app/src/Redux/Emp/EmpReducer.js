import { EmpClass } from "../../Class/Emp";
import { ADD_EMP, REMOVE_EMP } from "./EmpType";

const initalState = [
  new EmpClass("Eric", "SDE", 0),
  new EmpClass("Tom", "SDE II", 1),
  new EmpClass("Rick", "SDE I", 2),
];
let tracker = 3;
const EmpReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EMP:
      return [...state, { ...payload, id: tracker++ }];
    case REMOVE_EMP:
      return state.filter((e) => e.id !== payload.id);
    default:
      return state;
  }
};
export default EmpReducer;
