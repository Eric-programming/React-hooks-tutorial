import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Data/DataActions";
import { removeEmp } from "../Redux/Emp/EmpActions";
const EmpListwithHooks = () => {
  const Emp = useSelector((state) => state.Emp);
  const { data } = useSelector((state) => state.Data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (Emp !== null && Emp.length > 0) {
    return (
      <>
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
                  <td onClick={() => dispatch(removeEmp(id))} key={id}>
                    ❌ Click here to delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <br />
        <p>{JSON.stringify(data)}</p>
      </>
    );
  } else {
    return null;
  }
};

export default EmpListwithHooks;
