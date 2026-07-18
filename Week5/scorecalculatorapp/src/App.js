import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="Kamesh G"
        school="Vel Tech HighTech"
        total={480}
        goal={5}
      />
    </div>
  );
}

export default App;