import React from 'react';

export const TodoFilter = () => (
  <>
    <span className="todo-count">
      3 items left
    </span>

    <ul className="filters">
      <li>
        <a href="#/" className="selected">All</a>
      </li>

      <li>
        <a href="#/active">Active</a>
      </li>

      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>

    <button type="button" className="clear-completed">
      Clear completed
    </button>
  </>
);