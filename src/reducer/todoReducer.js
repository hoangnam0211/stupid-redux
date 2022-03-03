import { ADD, UPDATE, DELETE } from "../type/type";

export const initalTodo = [];

const todoReducer = (state = todoReducer, action) => {
  switch (action.type) {
    case ADD:
      return {};

    case UPDATE:
      return {};

    case DELETE:
      return {};
    default:
      return state;
  }
};

export default todoReducer;
