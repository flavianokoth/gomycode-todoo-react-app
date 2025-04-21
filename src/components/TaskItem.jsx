import React from "react";

const TaskItem = ({ task, onDelete, onEdit, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => {
          if (window.confirm("Delete this task?")) onDelete(task.id);
        }}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
