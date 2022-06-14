import { getNodeText } from "@testing-library/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const handleRemove = (taskId) => {
    dispatch(remove(taskId));
  };

  return (
    <div>
      <center>
        <h3>To Do List</h3>
      </center>
      <div className="cartWrapper">
        {todo.map((task) => (
          <div key={task.id} className="todoListCard">
            <h5>{task.title}</h5>
            <h5>{task.completed}</h5>
            <button className="btn" onClick={() => handleRemove(task.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
