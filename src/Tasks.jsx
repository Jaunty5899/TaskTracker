import { useState } from "react";
import "./Tasks.css";

export default function Tasks({ Data, removeData }) {
  const [state, setState] = useState();

  return (
    <div className="task">
      <label className={state ? "checked" : undefined}>
        <input type="checkbox" onClick={(e) => setState(e.target.checked)} />
        {Data.title}
      </label>
      <span
        className="material-icons"
        onClick={() => removeData({ id: Data.id })}
      >
        delete
      </span>
    </div>
  );
}
