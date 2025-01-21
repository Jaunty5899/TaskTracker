import "./Search.css";

export default function Search() {
  return (
    <div className="searchContainer">
      <input
        className="searchBox"
        type="text"
        placeholder="Start writing and press enter to create task"
      />
      <button className="searchButton material-symbols-outlined">
        subdirectory_arrow_left
      </button>
    </div>
  );
}
