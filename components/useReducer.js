import { v4 as uuidv4 } from 'uuid';

const tasksReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'LOAD_TASKS': {
            return action.payload ? action.payload : state;
        };
        case 'ADD_TASK':
            return {
                ...state,
                [action.priority]: [...state[action.priority], { id: uuidv4(), ...action.task }]
            };
        case 'REMOVE_TASK':
            const priorityTasks = `${action.priority}PriorityTasks`;
            return {
                ...state,
                [priorityTasks]: state[priorityTasks].filter(task => task.id !== action.taskId)
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                [action.priority]: state[action.priority].map(task =>
                    task.id === action.taskId ? { ...task, ...action.updatedTask } : task
                )
            };
        case 'ADD_CATEGORY':
            return {
                ...state,
                customCategories: [...state.customCategories, action.category]
            };
        case 'DELETE_CATEGORY':
            return {
                ...state,
                customCategories: state.customCategories.filter(category => category.title !== action.category)
            };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export default tasksReducer;
