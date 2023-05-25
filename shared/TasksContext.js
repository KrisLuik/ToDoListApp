import React, { createContext, useReducer } from 'react';
import tasksReducer from '.././components/useReducer';

const initialState = {
    highPriorityTasks: [],
    mediumPriorityTasks: [],
    lowPriorityTasks: []
};

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState);
// added 
const handleCheckboxPress = (priority, taskId) => {
    dispatch({ type: 'REMOVE_TASK', priority, taskId });
  };
// added ends
    return (
        <TasksContext.Provider value={{ state, dispatch, handleCheckboxPress  }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
