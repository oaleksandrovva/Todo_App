import React, { useState, useContext, useCallback, useMemo } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';

import { TodosContext } from './TodosContext';

function TodoApp() {
  const { todos, setTodos } = useContext(TodosContext);
  const [isAllCompleted, setIsAllCompleted] = useState(false);
  const [filter, setFilter] = useState('All');

  const addNewTodo = useCallback((newTodo) => {
    setTodos([...todos, newTodo]);
  }, [todos, setTodos]);

  const handleToggleAll = () => {
    setTodos(todos.map(todo => ({
      ...todo,
      completed: !isAllCompleted,
    })));
    setIsAllCompleted(!isAllCompleted);
  };

  const filterTodos = useCallback((filterBy) => {
    switch (filterBy) {
      case 'Active':
        return todos.filter(todo => !todo.completed);
      case 'Completed':
        return todos.filter(todo => todo.completed);
      case 'All':
      default:
        return todos;
    }
  }, [todos]);

  const deleteCompletedTodos = useCallback(() => {
    setTodos(todos.filter(todo => !todo.completed));
  }, [todos, setTodos]);

  const filteredTodos = useMemo(
    () => filterTodos(filter),
    [filter, filterTodos],
  );

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos App</h1>

        <TodoForm onAddNewTodo={addNewTodo} />
      </header>

      {!!todos.length && (
        <>
          <section className="main">
            <input
              type="checkbox"
              id="toggle-all"
              className="toggle-all"
              onChange={handleToggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <TodoList todos={filteredTodos} />

          </section>

          <footer className="footer">
            <TodoFilter
              todos={filteredTodos}
              filter={filter}
              setFilter={setFilter}
              onDeleteCompletedTodos={deleteCompletedTodos}
            />
          </footer>
        </>
      )}
    </section>
  );
}

export default TodoApp;
