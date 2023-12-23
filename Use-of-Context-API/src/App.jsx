import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContext from "./store/todo-items-store";
const todoItemsReducer = (currState, action) => {
  let newTodoItems = currState;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currState,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currState.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newTodoItems;
};
function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
