import React, { useState } from "react";
import { connect } from "react-redux";
import { addEmp } from "../Redux/Emp/EmpActions";
const init = {
  fullName: "",
  Position: "",
};
const AddEmp = ({ addEmp }) => {
  const [state, setState] = useState(init);
  const updateInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmp(state);
    setState(init);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            name="fullName"
            onChange={(e) => updateInput(e)}
            value={state.fullName}
          />
        </label>
        <br />
        <br />
        <label>
          Position:
          <input
            name="Position"
            onChange={(e) => updateInput(e)}
            value={state.Position}
            type="Position"
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default connect(null, { addEmp })(AddEmp);
