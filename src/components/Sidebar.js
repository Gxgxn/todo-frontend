import React, { useEffect, useState } from "react";
import axios from "axios";
const Sidebar = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  async function fetchData() {
    let res = await axios.get("http://localhost:4000/getalltodo");
    const todoArray = [];
    console.log(res);
    res.data.forEach((todo) => todoArray.push(todo.title));
    setTodoList(todoArray);
  }

  useEffect(() => {
    fetchData();
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    let res = axios.post("http://localhost:4000/createtodo", {
      title: todo,
    });
    console.log(res);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inline-flex w-full">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button className="btn">Add todo</button>
        </div>
      </form>

      {todoList &&
        todoList.map((todo) => (
          <h4 className="text-center bg-slate-800 rounded-lg p-1 my-2 cursor-pointer hover:bg-slate-500 hover:text-slate-800">
            {todo}
          </h4>
        ))}
    </div>
  );
};

export default Sidebar;
