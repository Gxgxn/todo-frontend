import React from "react";

const Task = (props) => {
  return (
    <div className="card min-w-[200px] min-h-[200px] bg-base-100 shadow-xl hover:bg-content ">
      <div className="card-body text-lg p-4">
        <p className="font-exo font-semibold text-xl md:max-w-[500px]">
          {props.title}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary w-full md:mr-auto  md:w-auto">
            Mark Complete
          </button>
          <div className="flex justify-between w-full md:w-auto space-x-3 ">
            <button className="btn btn-primary w-[45%] md:w-auto">Edit</button>
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
