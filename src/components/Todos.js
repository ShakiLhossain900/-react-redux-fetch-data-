import React from "react";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => console.log(state));
  return (
    <div>
      <h1> Todos app</h1>
    </div>
  );
};

export default Todos;
