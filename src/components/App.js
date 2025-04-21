import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tasks based on selected category
  const visibleTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  // Handle adding a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Handle deleting a task
  function handleDeleteTask(taskToDelete) {
    const updatedTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  }

  // Handle category selection
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleAddTask} 
      />
      <TaskList 
        tasks={visibleTasks} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;