import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editingTask, cancelEdit }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDesc(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !taskDesc.trim()) return alert("All fields required!");
    onSubmit({ name: taskName, description: taskDesc });
    setTaskName("");
    setTaskDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={taskDesc}
        onChange={(e) => setTaskDesc(e.target.value)}
      />
      <button type="submit">{editingTask ? "Update" : "Add"} Task</button>
      {editingTask && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
