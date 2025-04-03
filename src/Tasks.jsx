import { useState } from "react";
import "./Tasks.css";

export default function Tasks({ Data, removeData, completeTask }) {
  const [state, setState] = useState();

  return (
    <div className="task">
      <label className={Data.completed ? "checked" : undefined}>
        <input
          type="checkbox"
          checked={Data.completed || false}
          onClick={() => {
            completeTask({ id: Data.id });
          }}
        />
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
