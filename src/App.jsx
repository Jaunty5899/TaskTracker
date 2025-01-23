import "./App.css";
import Search from "./Search";
import Tasks from "./Tasks";
import { useState } from "react";

const data = [
  "Breakfast: Oatmeal with berries",
  "Lunch: Salad with grilled chicken",
  "Dinner: Pasta with tomato sauce",
  "Snack: Apple and peanut butter",
  "Breakfast: Scrambled eggs and toast",
];

function App() {
  const [array, setArray] = useState(data);

  function AddData(item) {
    !data.includes(item) && setArray(data.unshift(item));
  }

  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <Search Data={AddData} />
      <div className="tasksContainer">
        {data.map((item) => (
          <Tasks Data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
