import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
const Dashboard = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState("");
  const BASE_URL = `http://localhost:4000`;
  //fetch Function
  async function fetchData() {
    let res = await axios.get(`${BASE_URL}/api/getalltodo`);
    const todoArray = [];
    // console.log(res);
    res.data.forEach((todo) => {
      todoArray.push({ title: todo.title, id: todo._id });
      // console.log(todo);
    });
    setTodoList(todoArray);
  }

  //delete todo function
  async function handleDelete(id, e) {
    e.stopPropagation();
    let res = await axios.delete(`${BASE_URL}/api/deletetodo/${id}`);
    setTodoList((prevList) =>
      prevList.filter((task) => {
        if (task.id !== id) return task;
      })
    );
  }
  //intial fetch
  useEffect(() => {
    fetchData();
  }, []);

  //Todo Title Submit Handler
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      title: todo,
      id: "112323dd232",
    };
    const res = await axios.post(`${BASE_URL}/api/createtodo`, data);
    setTodoList((prevList) => [
      ...prevList,
      { title: res.data.title, id: res.data._id },
    ]);
    setTodo("");
  }
  //fetch tasks for an TodoId
  async function fetchTasks(todoId) {
    let res = await axios.get(`${BASE_URL}/api/gettodo/${todoId}`);
    console.log(res);
    setTaskList(res.data.tasks);
  }

  //todo clickHandler
  async function todoClickHandler(todoId) {
    setCurrentTodoId(todoId);
    fetchTasks(todoId);
  }

  //delete route for tasks
  async function deleteTaskHandler(taskId) {
    let res = await axios.delete(
      `${BASE_URL}/api/deletetask/${currentTodoId}/${taskId}`
    );
    setTaskList((prevList) => {
      console.log(prevList);
      return prevList.filter((task) => {
        if (task._id !== taskId) return task;
      });
    });
  }
  return (
    <div className="container mx-auto grid bg-base-300 min-h-[90vh] md:grid-cols-[minmax(400px,_1fr)_3fr] p-5 gap-2">
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
                onClick={() => todoClickHandler(todo.id)}
                className={`text-center bg-base-200 text-base-content rounded-lg p-2 my-2 cursor-pointer hover:bg-neutral-focus hover:text-content relative ${
                  currentTodoId === todo.id
                    ? "bg-secondary-focus hover:bg-secondary-focus"
                    : ""
                }`}
              >
                {todo.title}
                <span
                  className="absolute top-3 right-3 hover:text-error text-lg tooltip tooltip-secondary tooltip-left"
                  data-tip="Delete"
                  onClick={(e) => handleDelete(todo.id, e)}
                >
                  <IoTrashBinOutline />
                </span>
              </h4>
            ))}
        </div>
      </div>
      <div className="flex justify-evenly items-start flex-wrap max-h-[90vh] overflow-y-auto gap-3 p-4">
        {taskList &&
          taskList.map((task, index) => {
            return (
              <Task
                key={index}
                tasks={taskList}
                title={task.task}
                currentTodo={currentTodoId}
                url={BASE_URL}
                delete={() => deleteTaskHandler(task._id)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
