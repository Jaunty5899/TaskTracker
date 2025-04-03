import "./App.css";
import Search from "./Search";
import Tasks from "./Tasks";
import { useState, useEffect } from "react";

const apiReadLink = "http://localhost:3000/todos";
const apiAddLink = "http://localhost:3000/addTodo";
const apiDeleteLink = "http://localhost:3000/DeleteTodo";
const apiCompleteLink = "http://localhost:3000/completeTodo";

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        const response = await fetch(apiReadLink);
        const jsonResponse = await response.json();
        setArray(jsonResponse.todos);
      };
      fetchData();
    }, 5000);
  }, []);

  const addData = async (data) => {
    const response = await fetch(apiAddLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
  };

  const removeData = async (data) => {
    const response = await fetch(apiDeleteLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
  };

  const completeTask = async (data) => {
    const response = await fetch(apiCompleteLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
  };

  // function AddData(item) {
  //   !array.includes(item) && setArray([item, ...array]);
  // }

  // function RemoveData(item) {
  //   setArray(array.filter((e) => e != item));
  // }

  return (
    <div className="container">
      <h2>Task Tracker</h2>
      <Search addData={addData} />
      <div className="tasksContainer">
        {array.map((item) => (
          <Tasks
            Data={item}
            removeData={removeData}
            completeTask={completeTask}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
