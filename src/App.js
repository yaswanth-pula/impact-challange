import CandidateList from "./components/CandidateList";
import NavigationBar from "./components/NavigationBar";
import "./app.css";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <CandidateList />
    </div>
  );
}

export default App;
