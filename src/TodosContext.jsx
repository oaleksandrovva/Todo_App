import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from './hooks/LocalStorage';

export const TodosContext = React.createContext({
  todos: [],
  setTodos: () => { },
});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const contextValue = useMemo(() => ({
    todos,
    setTodos,
  }), [todos]);

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};