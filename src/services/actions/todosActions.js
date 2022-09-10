import axios from "axios";
import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailed,
} from "../constansts/todosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: getTodosRequest });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos"); // async await means ai operation ses howa porjonto niche asbe na until operation finished
    dispatch({ type: getTodosSuccess, payload: res.data });
  } catch (error) {
    dispatch({type: getTodosFailed, payload:error.message});
  }
};
 