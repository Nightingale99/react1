import './TaskList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

function TaskList({ taskData, onDeleted, onTaskDone }) {
  const elements = taskData.map((item) => (
    <Task
      key={item.id}
      taskData={item}
      onDeleted={() => { onDeleted(item.id); }}
      onTaskDone={() => { onTaskDone(item.id); }}
    />
  ));
  return (
    <section className="main">
      <ul className="todo-list">
        {elements}

      </ul>
    </section>
  );
}

TaskList.propTypes = {
  taskData: PropTypes.instanceOf(Array).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onTaskDone: PropTypes.func.isRequired,
};

export default TaskList;
