import { useCallback } from 'react';

const usePriorityStyles = (title) => {
  const priorityColor = useCallback((title) => {
        switch (title) {
          case 'High Priority':
            return { backgroundColor: 'rgba(249, 23, 43, 1) ' }; // Red 
          case 'Medium Priority':
            return { backgroundColor: 'rgba(250,185,0, 1)' }; // Yellow  
          case 'Low Priority':
            return { backgroundColor: 'rgba(82,196,26,1)' }; // Green 
          default:
            return {};
        }
  }, []);

  const priorityContainerColor = useCallback((title) => {
    switch (title) {
        case 'High Priority':
          return { backgroundColor: 'rgba(255,24,12, 0.1)' }; // Pastel Red
        case 'Medium Priority':
          return { backgroundColor: 'rgba(250,172,20, 0.1)' }; // Pastel Yellow 
        case 'Low Priority':
          return { backgroundColor: 'rgba(82,196,26, 0.1)' }; // Pastel Green
        default:
          return {};
      }
  }, []);

  return {
    color: priorityColor(title),
    containerColor: priorityContainerColor(title),
  };
};

export default usePriorityStyles;