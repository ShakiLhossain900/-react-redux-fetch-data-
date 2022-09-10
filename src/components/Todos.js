import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h1> Todos app</h1>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos && todos.map((todo)=>{
            return <article key={todo.id}>
                <h4>{todo.id}</h4>
                <h3>{todo.title}</h3>
            </article>
        })}
      </section>
    </div>
  );
};

export default Todos;
