import { createContext } from "react";

const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

export default TodoItemsContext;
