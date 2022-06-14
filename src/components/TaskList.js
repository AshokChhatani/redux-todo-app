import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/todoSlice";
import { fetchTasklist } from "../store/tasklistSlice";
import { STATUSES } from "../store/tasklistSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasklist, status } = useSelector((state) => state.tasklist);
  useEffect(() => {
    dispatch(fetchTasklist());
  }, []);

  const handleAdd = (task) => {
    dispatch(add(task));
  };

  if (status === STATUSES.LOADING) {
    return (
      <center>
        <h2>Loading....</h2>
      </center>
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="wrapper">
      {tasklist.map((task) => (
        <div key={task.id}>
          <div className="card" key={task.id}>
            <h4>{task.title}</h4>

            <button onClick={() => handleAdd(task)} className="btn">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
