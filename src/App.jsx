import "./App.css";
import Search from "./Search";
import Tasks from "./Tasks";

function App() {
  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <Search />
      <Tasks />
    </div>
  );
}

export default App;
