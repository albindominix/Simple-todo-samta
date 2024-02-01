import { useState } from "react";
import "./App.css";

export default function TodoList() {
  const init =[{task:'Task 1'},{task:'Task 2'},{task:'Task 3'}]
  const [text, setText] = useState("");
  const [todo, setTodo] = useState(init);

  function handleClick() {
    if(!text){
      return
    }
    setTodo([...todo, { task: text }]);
    setText("");
  }

  function handleDelete(i) {
    const filtered = todo.filter((item, index) => i !== index);
    setTodo(filtered);
  }

  return (
    <div className=" h-screen flex flex-col gap-2 items-center justify-center">
      <div>
        <input
          type="text"
          value={text}
          className="border outline-none h-10 px-3"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-400 p-2 outline-none text-white font-semibold hover:bg-blue-500 rounded-r-md"
          onClick={handleClick}
        >
          submit
        </button>
      </div>
      <div className="border shadow-md min-w-[400px] p-2   max-h-[20rem] overflow-y-scroll flex flex-col gap-2">
        {todo.map((item, index) => (
          <div className=" border p-3 flex items-center gap-3 justify-between rounded-md flex-1">
            <div>{item.task}</div>
            <button className="bg-red-500 hover:bg-red-700 px-2 py-1 rounded-lg text-white" onClick={() => handleDelete(index)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
