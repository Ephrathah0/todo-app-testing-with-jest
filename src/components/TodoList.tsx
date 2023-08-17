import React from "react";
import { Task } from "../pages/Task";
import {
  AiFillDelete,
  AiFillCheckCircle,
  AiFillBackward,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTask, moveTask } from "../store/slices/tasksSlice";

const TaskItem: React.FC<Task> = ({ id, description, isDone }) => {
  const dispatch = useDispatch();
  const removeTask = () => {
    dispatch(deleteTask(id));
  };
  const completeTask = () => {
    const payload = {
      id,
      isDone: !isDone,
    };

    dispatch(moveTask(payload));
  };

  return (
    <div
      role="task-item"
      className="w-full bg-yellow-300 transform transition-all hover:outline-2 hover:outline-black duration-500 p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className={`font-medium ${isDone ? "line-through" : ""}`}>
            {description}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span onClick={removeTask} data-testid="delete-button">
            <AiFillDelete />
          </span>
           <div onClick={completeTask} data-testid="complete-button">
            {!isDone && (
              <span>
                <AiFillCheckCircle />
              </span>
            )}
            {isDone && (
              <span>
                <AiFillBackward />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;