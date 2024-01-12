import React, { useState } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onChange }) => {
  const [value, setValue] = useState('');

  const inputChanged = (event) => {
    setValue(event.target.value);
  };

  const taskCreated = (e) => {
    if (e.key === 'Enter') {
      onChange(value);
      setValue('');
    }
  };

  return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={inputChanged}
          value={value}
          onKeyDown={(e) => {
            taskCreated(e);
          }}
        />
      </header>
  );
};
NewTaskForm.propTypes = {
  onChange: PropTypes.func,
};
export default NewTaskForm;
