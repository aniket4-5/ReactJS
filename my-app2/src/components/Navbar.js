import React from "react";

export default function Navbar(props) {
  return (
    <div className="container my-2 p-2 bg-warning text-white text-center">
      <h2>{props.title}</h2>
    </div>
  );
}
