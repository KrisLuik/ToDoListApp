import { useState } from "react";

const usePriorityTasks = () => {
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);

  const addTask = (task, priority) => {
    if (priority === "High") {
      setHighPriorityTasks([...highPriorityTasks, task]);
    } else if (priority === "Medium") {
      setMediumPriorityTasks([...mediumPriorityTasks, task]);
    } else if (priority === "Low") {
      setLowPriorityTasks([...lowPriorityTasks, task]);
    }
  };

  const deleteTask = (taskKey, priority) => {
    if (priority === "High") {
      setHighPriorityTasks(
        highPriorityTasks.filter((_, index) => index !== taskKey)
      );
    } else if (priority === "Medium") {
      setMediumPriorityTasks(
        mediumPriorityTasks.filter((_, index) => index !== taskKey)
      );
    } else if (priority === "Low") {
      setLowPriorityTasks(
        lowPriorityTasks.filter((_, index) => index !== taskKey)
      );
    }
  };

  const updateTask = (taskKey, updatedTask, priority) => {
    if (priority === "High") {
      setHighPriorityTasks(
        highPriorityTasks.map((task, index) =>
          index === taskKey ? updatedTask : task
        )
      );
    } else if (priority === "Medium") {
      setMediumPriorityTasks(
        mediumPriorityTasks.map((task, index) =>
          index === taskKey ? updatedTask : task
        )
      );
    } else if (priority === "Low") {
      setLowPriorityTasks(
        lowPriorityTasks.map((task, index) =>
          index === taskKey ? updatedTask : task
        )
      );
    }
  };

  return {
    highPriorityTasks,
    mediumPriorityTasks,
    lowPriorityTasks,
    addHighPriorityTask,
    addMediumPriorityTask,
    addLowPriorityTask,
    addTask,
    deleteTask,
    updateTask,
  };
};

export default usePriorityTasks;
