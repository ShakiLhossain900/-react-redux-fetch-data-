import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailed,
} from "../constansts/todosConstants";
const initialState = {
  isLoading: false,
  todos: [],
  error: null,
};

const todosReducer = (state=initialState, action) => {
  switch (action.type) {
    case getTodosRequest:
        return{
            ...state,
            isLoading:true,
        }
    case getTodosSuccess:
        return{
            isLoading:false,
            todos: action.payload
        }
    case getTodosFailed: 
    return{
        isLoading:false,
        todos: [],
        error: action.payload
    }
    default:
        return state;
  }
};

export default todosReducer;
