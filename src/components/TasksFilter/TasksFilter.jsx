import './TasksFilter.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const [filter, setFilter] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const allSelected = () => {
    setFilter({
      all: true,
      active: false,
      completed: false,
    });
    props.allSelected();
  };

  const activeSelected = () => {
    setFilter({
      all: false,
      active: true,
      completed: false,
    });
    props.activeSelected();
  };

  const completedSelected = () => {
    setFilter({
      all: false,
      active: false,
      completed: true,
    });
    props.completedSelected();
  };

  const allClass = filter.all ? 'selected' : '';
  const activeClass = filter.active ? 'selected' : '';
  const completedClass = filter.completed ? 'selected' : '';
  return (
      <ul className="filters">
        <li>
          <button
            onClick={() => {
              allSelected();
            }}
            className={allClass}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              activeSelected();
            }}
            className={activeClass}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              completedSelected();
            }}
            className={completedClass}
          >
            Completed
          </button>
        </li>
      </ul>
  );
};

Filters.propTypes = {
  allSelected: PropTypes.func,
  activeSelected: PropTypes.func,
  completedSelected: PropTypes.func,
};

export default Filters;
