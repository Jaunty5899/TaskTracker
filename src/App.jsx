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

  function RemoveData(index) {
    data.splice(index, 1);
    setArray(data);
  }

  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <Search addData={AddData} />
      <div className="tasksContainer">
        {data.map((item, index) => (
          <Tasks
            Data={item}
            removeData={RemoveData}
            Index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
