import './Task.css';
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
  static propTypes = {
    taskData: PropTypes.shape({
      created: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      hidden: PropTypes.bool.isRequired,
    }),
    onDeleted: PropTypes.func,
    onTaskDone: PropTypes.func,
  };

  state = {
    editing: false,
  };

  taskEditing = () => {
    this.setState((state) => ({
      editing: !state.editing,
    }));
  };

  taskInputChanged = (newValue) => {
    this.props.taskData.description = newValue;
  };

  render() {
    let classNames = '';
    if (this.state.editing) {
      classNames = 'editing';
    }
    const { created, description, done, hidden } = this.props.taskData;

    const { onDeleted, onTaskDone } = this.props;

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
          <button type="button" value="Submit" className="icon icon-edit" onClick={() => this.taskEditing()} />
          <button type="button" value=" " className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <input
          type="text"
          className="edit"
          onKeyDown={(e) => (e.key === 'Enter' ? this.taskEditing() : NaN)}
          onChange={(event) => this.taskInputChanged(event.target.value)}
        />
      </li>
    );
  }
}
