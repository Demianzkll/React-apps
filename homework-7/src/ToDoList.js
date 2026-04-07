import { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([
    { do: "John", work: "Clean room", status: "doing" },
    { do: "Nick", work: "Wash dishes", status: "done" },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputWork, setInputWork] = useState("");

  const [hideDone, setHideDone] = useState(false);

  // const [done, setDone] = useState("");

  function addItem(newName, newWork) {
    if (!newName || !newWork) return;

    setItems([...items, { do: newName, work: newWork, status: "doing" }]);
    setInputWork("");
    setInputName("");
  }

  function markTask(index) {
    setItems(items.map((task, i) =>
      i === index ? { ...task, status: task.status === "done" ? "doing" : "done" } : task
    ));
  }

  function removeTask(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  const visibleItems = hideDone
    ? items.filter(task => task.status !== "done")
    : items;


  return (
    <div>
      <button onClick={() => setHideDone(p => !p)}>
        {hideDone ? "Show done" : "Hide done"}
      </button>

      <ul>
        {visibleItems.map((task, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={task.status === "done"}
              onChange={() => markTask(i)}
            />
            <button onClick={() => removeTask(i)}>Remove</button>
            {task.do} - {task.work} ({task.status})
          </li>
        ))}
      </ul>

      <div>Done {items.filter(task => task.status === "done").length} out of {items.length}</div>

      <input
        value={inputWork}
        placeholder="Work"
        onChange={(e) => setInputWork(e.target.value)}
      />
      <input
        value={inputName}
        placeholder="Who will do"
        onChange={(e) => setInputName(e.target.value)}
      />

      <button onClick={() => addItem(inputName, inputWork)}>Add</button>
    </div>
  );
}

export default ToDoList;
