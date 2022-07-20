import React, { useState } from "react";

export default function TextForm() {
  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const changeToLowerCase = () => {
    let newText = inputtext.toLowerCase();
    setOutputText(newText);
  };
  const changeToUpperCase = () => {
    let newText = inputtext.toUpperCase();
    setOutputText(newText);
  };

  const [inputtext, setInputText] = useState("Enter Your Text Here . . . ");
  const [outputtext, setOutputText] = useState("");

  return (
    <div className="container my-3">
      <h5>Enter Your Text Here :</h5>
      <textarea
        className="mt-3 form-control bg-dark text-white"
        rows="8"
        value={inputtext}
        onChange={handleOnChange}
      />
      <div className="d-flex mt-2">
        {/* <h5>Summary : </h5> */}
        <p className="mx-1 bg-dark text-center text-white p-2">
          Words = {inputtext.length > 0 ? inputtext.split(" ").length : 0}
        </p>
        <p className="mx-1  bg-dark text-center text-white p-2">
          Characters = {inputtext.length}
        </p>
      </div>
      <textarea
        className="mt-1 form-control bg-dark text-white"
        rows="8"
        value={outputtext}
      />

      <h5 className="my-2">Convert to : </h5>
      <div className="my-3 ">
        <button
          className="m-1 btn btn-outline-primary"
          onClick={changeToUpperCase}
        >
          UPPERCASE
        </button>
        <button
          className="m-1 btn btn-outline-primary"
          onClick={changeToLowerCase}
        >
          lowerCase
        </button>
      </div>
    </div>
  );
}
