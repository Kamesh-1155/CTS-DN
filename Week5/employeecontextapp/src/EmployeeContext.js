import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice", department: "HR" },
    { id: 2, name: "Bob", department: "IT" }
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};