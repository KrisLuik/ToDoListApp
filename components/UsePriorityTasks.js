import { useState } from "react";

const usePriorityTasks = () => {
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);

  const addTask = (task, priority) => {
    if (priority === "high") {
      setHighPriorityTasks([...highPriorityTasks, task]);
    } else if (priority === "medium") {
      setMediumPriorityTasks([...mediumPriorityTasks, task]);
    } else if (priority === "low") {
      setLowPriorityTasks([...lowPriorityTasks, task]);
    }
  };

  const deleteTask = (taskKey, priority) => {
    if (priority === "high") {
      setHighPriorityTasks(
        highPriorityTasks.filter((_, index) => index !== taskKey)
      );
    } else if (priority === "medium") {
      setMediumPriorityTasks(
        mediumPriorityTasks.filter((_, index) => index !== taskKey)
      );
    } else if (priority === "low") {
      setLowPriorityTasks(
        lowPriorityTasks.filter((_, index) => index !== taskKey)
      );
    }
  };

  const updateTask = (taskKey, updatedTask, priority) => {
    if (priority === "high") {
      setHighPriorityTasks(
        highPriorityTasks.map((task, index) =>
          index === taskKey ? updatedTask : task
        )
      );
    } else if (priority === "medium") {
      setMediumPriorityTasks(
        mediumPriorityTasks.map((task, index) =>
          index === taskKey ? updatedTask : task
        )
      );
    } else if (priority === "low") {
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
    addTask,
    deleteTask,
    updateTask,
  };
};

export default usePriorityTasks;
