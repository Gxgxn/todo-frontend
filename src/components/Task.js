import React from "react";
import { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const Task = (props) => {
  const [newValue, setNewValue] = useState("");
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
        <p className="font-exo font-semibold text-xl text-base-content md:max-w-[500px]">
          {props.title}
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary w-full md:mr-auto  md:w-auto"
            onClick={props.handleIsDone}
          >
            {!props.isDone ? "Mark Complete" : "Unmark Completed"}
          </button>
          <div className="flex justify-between w-full md:w-auto space-x-3 ">
            <label for="my-modal-6" class="btn btn-primary w-[45%] md:w-auto">
              Edit
            </label>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
              <div class="modal-box">
                <h3 class="font-bold text-lg py-3">Edit Task Name</h3>

                <form>
                  <input
                    type="text"
                    placeholder="Enter New Task Name"
                    className="input input-bordered w-full max-w-xs"
                    value={newValue}
                    onChange={(event) => setNewValue(event.target.value)}
                  />
                </form>
                <div class="modal-action">
                  <label for="my-modal-6" class="btn btn-error">
                    Cancel
                  </label>
                  <label for="my-modal-6" class="btn btn-success">
                    Submit
                  </label>
                </div>
              </div>
            </div>
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
