import React, { useContext } from "react";
import { EmployeeContext } from "../EmployeeContext";

function EmployeeList() {
  const { employees } = useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;