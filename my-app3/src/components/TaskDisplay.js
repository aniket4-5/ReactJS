import React from "react";

export default function TaskDisplay(props) {
  return (
    <tr key={props.task.id} className="text-white">
      <td className="p-1">{props.task.taskname}</td>
      <td className="p-1">{props.task.startdate}</td>
      <td className="p-1">{props.task.enddate}</td>
      <td className="">
        <p
          className="btn btn-danger"
          onClick={() => props.handleDelete(props.task.id)}
        >
          Delete
        </p>
      </td>
    </tr>
  );
}
