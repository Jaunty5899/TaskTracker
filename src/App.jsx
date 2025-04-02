import "./App.css";
import Search from "./Search";
import Tasks from "./Tasks";
import { useState, useEffect } from "react";

const apiLink = "http://localhost:3000/todos";

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        const response = await fetch(apiLink);
        const jsonResponse = await response.json();
        setArray(jsonResponse.todos);
      };
      fetchData();
    }, 5000);
  }, []);

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
        {array.map((item) => (
          <Tasks Data={item} removeData={RemoveData} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
