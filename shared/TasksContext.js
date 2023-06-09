import React, { createContext, useReducer, useEffect } from 'react';
import tasksReducer from '.././components/useReducer';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    highPriorityTasks: [],
    mediumPriorityTasks: [],
    lowPriorityTasks: [],
    customCategories: []
};

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    useEffect(() => {
        const loadTasks = async () => {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks) {
                const loadedTasks = JSON.parse(savedTasks);
                if (!loadedTasks.customCategories) {
                    loadedTasks.customCategories = [];
                }
                dispatch({ type: 'LOAD_TASKS', payload: loadedTasks });
            }
        };
        loadTasks();
    }, []);
    
    useEffect(() => {
        const saveTasks = async () => {
            await AsyncStorage.setItem('tasks', JSON.stringify(state));
        };
        saveTasks();
    }, [state]);

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
    const addCategory = (title, color) =>{
        dispatch({
            type: 'ADD_CATEGORY',
            category: {title: title, color: color }

        })
    }
    return (
        <TasksContext.Provider value={{ state, dispatch, handleCheckboxPress, handleUpdateTaskPress, handleSubmit, addCategory }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContext;
