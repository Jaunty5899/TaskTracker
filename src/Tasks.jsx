import { useState } from "react";
import "./Tasks.css";

export default function Tasks({ Data }) {
  const [state, setState] = useState();
  return (
    <div className="task">
      <label className={state ? "checked" : undefined}>
        <input type="checkbox" onClick={(e) => setState(e.target.checked)} />
        {Data}
      </label>
      <span className="material-icons">delete</span>
    </div>
  );
}
