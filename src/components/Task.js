import React from "react";
import { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const Task = (props) => {
  const [editing, setEditing] = useState(false);
  return (
    <div
      className={`card min-w-[200px] min-h-[200px] ${
        props.isDone ? "bg-success-content" : "bg-base-100"
      } shadow-xl hover:bg-content relative`}
    >
      {props.isDone && (
        <span className="absolute right-2 top-2">
          <IoCheckmarkDoneSharp />
        </span>
      )}
      <div className="card-body text-lg p-4">
        <p className="font-exo font-semibold text-xl text-base-content md:max-w-[500px] py-5">
          {props.title}
        </p>
        {editing && (
          <div className="inline-flex w- gap-6">
            <input
              type="text"
              placeholder="Edit Task Name"
              className="input input-bordered w-full max-w-xs"
              value={props.newValue}
              onChange={(event) => props.setNewValue(event.target.value)}
            />
            <button
              className="btn btn-secondary"
              onClick={() => {
                return props.edit(props.taskId), setEditing(false);
              }}
            >
              submit
            </button>
          </div>
        )}
        <div className="card-actions justify-end py-5">
          <button
            className="btn btn-secondary w-full md:mr-auto  md:w-auto"
            onClick={props.handleIsDone}
          >
            {!props.isDone ? "Mark Complete" : "Unmark Completed"}
          </button>
          <div className="flex justify-between w-full md:w-auto space-x-3 ">
            <button
              class="btn btn-accent"
              onClick={() => setEditing((prev) => !prev)}
            >
              {editing ? "Cancel" : "Edit"}
            </button>

            <button
              className="btn btn-error w-[45%] md:w-auto"
              onClick={props.delete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
