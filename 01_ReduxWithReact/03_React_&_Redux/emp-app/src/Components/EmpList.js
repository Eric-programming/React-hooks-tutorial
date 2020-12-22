import React from "react";
import { connect } from "react-redux";
import { removeEmp } from "../Redux/Emp/EmpActions";
const EmpList = ({ Emp, removeEmp }) => {
  if (Emp !== null && Emp.length > 0) {
    return (
      <table>
        <tbody>
          <tr>
            <th>Full Name</th>
            <th>Position</th>
            <th>Called</th>
          </tr>
          {Emp.map((lead) => {
            const { fullName, Position, id } = lead;
            return (
              <tr key={id}>
                <td>{fullName}</td>
                <td>{Position}</td>
                <td onClick={() => removeEmp(id)} key={id}>
                  ❌ Click here to delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { removeEmp })(EmpList);
