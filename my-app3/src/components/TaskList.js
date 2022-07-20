import React from "react";
import TaskDisplay from "./TaskDisplay";

export default function TaskList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {props.tasklist.map((task1) => {
          return <TaskDisplay task={task1} handleDelete={props.handleDelete} />;
        })}
      </tbody>
    </table>
  );
}
