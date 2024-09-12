import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../actions/actions";

const initialState = [];

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          content: action.payload,
          completed: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((todos) => todos.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, content: action.payload.newContent }
          : todo
      );
    default:
      return state;
  }
};

export default todoReducers;
