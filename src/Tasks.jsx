import "./Tasks.css";
import { useState } from "react";

export default function Tasks() {
  const [state, setState] = useState(false);
  return (
    <div className="tasksContainer">
      <div className="task">
        <label className={state ? "checked" : undefined}>
          <input type="checkbox" onClick={(e) => setState(e.target.checked)} />
          New task is created and added to the list
        </label>
        <span className="material-icons">delete</span>
      </div>
    </div>
  );
}
