import React from "react";

const TodoItem1 = () => {
  let todoName = "Buy Milk";
  let todoDate = "04/10/2023";
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
