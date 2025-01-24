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
    !array.includes(item) && setArray([item, ...array]);
  }

  function RemoveData(item) {
    setArray(array.filter((e) => e != item));
  }

  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <Search addData={AddData} />
      <div className="tasksContainer">
        {array.map((item, index) => (
          <Tasks Data={item} removeData={RemoveData} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
