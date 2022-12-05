import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
const Dashboard = (props) => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  //fetch Function
  async function fetchData() {
    let res = await axios.get("http://localhost:4000/api/getalltodo");
    const todoArray = [];
    // console.log(res);
    res.data.forEach((todo) => {
      todoArray.push({ title: todo.title, id: todo._id });
      console.log(todo);
    });
    setTodoList(todoArray);
  }
  async function fetchTask(id) {
    let res = await axios.get(`http://localhost:4000/api/deletetodo/${id}`);
  }
  //delete todo function
  async function handleDelete(id) {
    console.log(id);
    let res = await axios.delete(`http://localhost:4000/api/deletetodo/${id}`);
    console.log(res);
    fetchData();
  }
  useEffect(() => {
    fetchData();
  }, []);

  //Todo Title Submit Handler
  async function handleSubmit(event) {
    event.preventDefault();
    let res = await axios.post("http://localhost:4000/api/createtodo", {
      title: todo,
      id: "112323dd232",
    });
    // console.log(res);
    setTodo("");
    fetchData();
  }
  return (
    <div className="container mx-auto grid bg-base-300 min-h-[90vh] grid-cols-[minmax(400px,_1fr)_3fr] p-5 gap-2">
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
            <button className="btn btn-secondary text-2xl ml-auto">
              <IoAddCircleOutline />
            </button>
          </div>
        </form>
        <div className="overflow-y-auto max-h-[75vh]">
          {todoList &&
            todoList.map((todo, index) => (
              <h4
                key={index}
                id={todo.id}
                onClick={() => fetchTodo(todo.id)}
                className=" text-center bg-base-200 text-base-content rounded-lg p-2 my-2 cursor-pointer hover:bg-neutral-focus hover:text-content relative"
              >
                {todo.title}
                <span
                  className="absolute top-3 right-3 hover:text-error text-lg tooltip tooltip-secondary tooltip-left"
                  data-tip="Delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  <IoTrashBinOutline />
                </span>
              </h4>
            ))}
        </div>
      </div>
      <Task />
    </div>
  );
};

export default Dashboard;
