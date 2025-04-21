import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();
    
    // Create a new task object
    const newTask = {
      id: Date.now(), // Using timestamp as a simple unique ID
      text: taskText,
      category: taskCategory
    };
    
    // Send the task to the parent component
    onTaskFormSubmit(newTask);
    
    // Reset the form
    setTaskText("");
    setTaskCategory(categories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Details:
          <input 
            type="text" 
            name="text" 
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Category:
          <select
            name="category"
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <button type="submit">Add task</button>
      </div>
    </form>
  );
}

export default NewTaskForm;