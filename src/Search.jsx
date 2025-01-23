import { useState } from "react";
import "./Search.css";

export default function Search({ addData }) {
  const [task, setTask] = useState();
  return (
    <div className="searchContainer">
      <input
        className="searchBox"
        type="text"
        placeholder="Start writing and press enter to create task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="searchButton material-icons"
        onClick={() => task && addData(task)}
      >
        subdirectory_arrow_left
      </button>
    </div>
  );
}
