import React, { useContext, useState } from "react";
import { EmployeeContext } from "../EmployeeContext";

function AddEmployee() {
  const { addEmployee } = useContext(EmployeeContext);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const handleAdd = () => {
    if (!name || !department) return;

    addEmployee({
      id: Date.now(),
      name,
      department
    });

    setName("");
    setDepartment("");
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={handleAdd}>Add Employee</button>
    </div>
  );
}

export default AddEmployee;