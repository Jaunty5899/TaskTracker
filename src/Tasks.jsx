import "./Tasks.css";

export default function Tasks() {
  return (
    <div className="tasksContainer">
      <div className="taskContainer">
        <input type="checkbox" id="task" />
        <label htmlFor="task">New task is created and added to the list</label>
      </div>
    </div>
  );
}
