import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import {
  IoAddCircleOutline,
  IoTrashBinOutline,
  IoSearch,
} from "react-icons/io5";
const Dashboard = () => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [currentTodoId, setCurrentTodoId] = useState("");
  const [newValue, setNewValue] = useState("");

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
    if (id === currentTodoId) {
      setTaskList("");
    }
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

  // Task Add Function
  async function handleTaskSubmit(event) {
    event.preventDefault();
    const data = {
      text: task,
    };
    const res = await axios.put(
      `${BASE_URL}/api/createtask/${currentTodoId}`,
      data
    );
    setTaskList(res.data.tasks);
    setTask("");
  }
  //fetch tasks for an TodoId
  async function fetchTasks(todoId) {
    let res = await axios.get(`${BASE_URL}/api/gettodo/${todoId}`);
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
      return prevList.filter((task) => {
        if (task._id !== taskId) return task;
      });
    });
  }

  //updating isDone Task
  async function handleIsDone(taskId, isDone) {
    const currentValue = isDone;
    let res = await axios.put(
      `${BASE_URL}/api/toggle/${currentTodoId}/${taskId}`,
      {
        isDone: currentValue,
      }
    );
    console.log(taskId, isDone);
    setTaskList(res.data.todo.tasks);
  }

  //changing task name
  async function editTask(taskId, e) {
    console.log(taskId);
    if (!newValue) {
      return alert("please enter a valid title");
    }
    let res = await axios.put(
      `${BASE_URL}/api/updatetask/${currentTodoId}/${taskId}`,
      {
        task: newValue,
      }
    );
    setTaskList(res.data.todo.tasks);
  }
  return (
    <div className="container mx-auto grid bg-base-300 min-h-[90vh] md:grid-cols-[minmax(400px,_1fr)_3fr] p-5 gap-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="inline-flex w-full">
            <input
              type="text"
              placeholder="Add A TODO"
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
      <div>
        {taskList && currentTodoId && (
          <div className="flex justify-end">
            <form onSubmit={handleTaskSubmit}>
              <div className="inline-flex ">
                <input
                  type="text"
                  placeholder="Add a Task..."
                  className="input input-bordered w-full max-w-xs"
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                />
                <button className="btn btn-accent text-2xl ml-auto ">
                  <IoAddCircleOutline />
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="flex justify-evenly items-start flex-wrap max-h-[90vh] overflow-y-auto gap-3 p-4">
          {taskList &&
            taskList.map((task, index) => {
              return (
                <Task
                  key={index}
                  tasks={taskList}
                  title={task.task}
                  taskId={task._id}
                  setNewValue={setNewValue}
                  newValue={newValue}
                  isDone={task.isDone}
                  handleIsDone={() => handleIsDone(task._id, task.isDone)}
                  delete={() => deleteTaskHandler(task._id)}
                  edit={editTask}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
