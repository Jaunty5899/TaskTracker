import "./App.css";
import Search from "./Search";
import Tasks from "./Tasks";

const data = [
  "Breakfast: Oatmeal with berries",
  "Lunch: Salad with grilled chicken",
  "Dinner: Pasta with tomato sauce",
  "Snack: Apple and peanut butter",
  "Breakfast: Scrambled eggs and toast",
];

function App() {
  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <Search />
      <div className="tasksContainer">
        {data.map((item) => (
          <Tasks Data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
