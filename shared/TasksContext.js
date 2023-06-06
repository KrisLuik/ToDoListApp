import React, { createContext, useReducer } from 'react';
import tasksReducer from '.././components/useReducer';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    highPriorityTasks: [],
    mediumPriorityTasks: [],
    lowPriorityTasks: []
};

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    const handleCheckboxPress = (priority, taskId) => {
        setTimeout(() => {
            dispatch({ type: 'REMOVE_TASK', priority, taskId });
        }, 200);
    };
    const handleUpdateTaskPress = (taskId, updatedTask, priority) => {
        dispatch({
            type: 'UPDATE_TASK',
            priority: priority + 'PriorityTasks',
            taskId: taskId,
            updatedTask: { task: updatedTask }
        });
    };
    const handleSubmit = (priority, task) => {
        dispatch({
            type: 'ADD_TASK',
            priority: priority + 'PriorityTasks',
            task: { id: uuidv4(), task: task },
        })

    }

    return (
        <TasksContext.Provider value={{ state, dispatch, handleCheckboxPress, handleUpdateTaskPress, handleSubmit }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
