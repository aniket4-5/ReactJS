import React, { useState } from "react";
import TaskList from "./TaskList";

export default function AddTask() {
  //hooks variables

  const [taskName, setTaskName] = useState("");

  const [taskStartDate, setTaskStartDate] = useState("");

  const [taskEndDate, setTaskEndDate] = useState("");

  const [taskList, setTaskList] = useState([]);
  //hooks handle functions
  const handlTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleStartDate = (e) => {
    setTaskStartDate(e.target.value);
  };
  const handleEndtDate = (e) => {
    setTaskEndDate(e.target.value);
  };

  const handleAddTask = () => {
    if (
      taskName.length === 0 ||
      taskEndDate.length === 0 ||
      taskStartDate.length === 0
    ) {
      alert("All Field Required");
      return;
    }

    if (taskStartDate > taskEndDate) {
      alert("Start Date must be less than or equal to End Date");
      return;
    }

    let currtask = {
      id: taskList.length + 1,
      taskname: taskName,
      startdate: taskStartDate,

      enddate: taskEndDate,
    };
    let newList = [...taskList, currtask];

    setTaskList(newList);
    setTaskName("");
    setTaskStartDate("");
    setTaskEndDate("");
  };

  const handleDelete = (id) => {
    let newList = taskList.filter((task) => {
      return task.id !== id;
    });
    setTaskList(newList);
  };

  //Rendering Logic
  return (
    <div className="container my-2">
      <h5 className="my-2 text-primary">Add a new task : </h5>
      <div className="p-2 my-2 bg-dark">
        <div className="row">
          <div className="col my-1">
            <p className="text-white">Task : </p>
            <input
              className="form-control"
              type="text"
              value={taskName}
              onChange={handlTaskNameChange}
            />
          </div>
          <div className="col my-1">
            <p className="text-white">Start Date : </p>
            <input
              className="form-control"
              type="date"
              value={taskStartDate}
              onChange={handleStartDate}
            />
          </div>
          <div className="col my-1">
            <p className="text-white">End Date : </p>
            <input
              className="form-control"
              type="date"
              value={taskEndDate}
              onChange={handleEndtDate}
            />
          </div>
        </div>

        <button className=" my-2 btn btn-success" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <h3 className="my-2 text-primary text-center">All Tasks</h3>

      {taskList.length > 0 ? (
        <div className="my-2 container bg-secondary ">
          <TaskList tasklist={taskList} handleDelete={handleDelete} />
        </div>
      ) : (
        <p className="h5 text-danger">No Task Added Yet !</p>
      )}
    </div>
  );
}
