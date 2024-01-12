import './Task.css';
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({ taskData, onDeleted, onTaskDone }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(taskData.description);

  const taskEditing = () => {
    setEditing((t) => !t);
    setValue(taskData.description);
  };

  const taskInputChanged = (event) => {
    // eslint-disable-next-line no-use-before-define, no-const-assign, no-param-reassign
    taskData.description = event.target.value;
  };

  let classNames = '';
  if (editing) {
    classNames = 'editing';
  }
  const {
    created, done, hidden, description,
  } = taskData;

  if (done) {
    classNames = 'completed';
  }

  if (hidden) {
    classNames += ' hidden';
  }

  return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={() => onTaskDone()} />
          <label>
            <span className="description">{description}</span>
            <span className="created">
              {formatDistanceToNow(created, {
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
          </label>
          <button type="button" value="Submit" className="icon icon-edit" onClick={() => taskEditing()} />
          <button type="button" value=" " className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <input
          type="text"
          className="edit"
          defaultValue={value}
          onKeyDown={(e) => (e.key === 'Enter' ? taskEditing() : NaN)}
          onChange={(event) => taskInputChanged(event)}
        />
      </li>
  );
};

Task.propTypes = {
  taskData: PropTypes.shape({
    created: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    hidden: PropTypes.bool.isRequired,
  }),
  onDeleted: PropTypes.func,
  onTaskDone: PropTypes.func,
};

export default Task;
