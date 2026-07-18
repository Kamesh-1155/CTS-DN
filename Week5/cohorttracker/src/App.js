import "./App.css";
import CohortDetails from "./CohortDetails";

function App() {

  return (
    <div>

      <CohortDetails
        cohortName="React Fundamentals"
        startDate="18-Jul-2026"
        status="Ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        cohortName="Java Full Stack"
        startDate="01-Jun-2026"
        status="Completed"
        coach="Michael"
        trainer="Smith"
      />

    </div>
  );
}

export default App;