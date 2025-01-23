import { useState } from "react";
import "./Tasks.css";

export default function Tasks({ Data, removeData, Index }) {
  const [state, setState] = useState();

  return (
    <div className="task">
      <label className={state ? "checked" : undefined}>
        <input type="checkbox" onClick={(e) => setState(e.target.checked)} />
        {Data}
      </label>
      <span className="material-icons" onClick={() => removeData(Index)}>
        delete
      </span>
    </div>
  );
}
