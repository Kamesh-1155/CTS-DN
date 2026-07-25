import React from "react";
import { EmployeeProvider } from "./EmployeeContext";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <EmployeeProvider>
      <div style={{ padding: "20px" }}>
        <h1>Employee Management</h1>
        <AddEmployee />
        <EmployeeList />
      </div>
    </EmployeeProvider>
  );
}

export default App;