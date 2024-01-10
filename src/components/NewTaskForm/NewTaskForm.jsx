import React from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  state = {
    value: '',
  };

  inputChanged = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  taskCreated = (e) => {
    if (e.key === 'Enter') {
      this.props.onChange(this.state.value);
      this.setState({
        value: '',
      });
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.inputChanged}
          value={this.state.value}
          onKeyDown={(e) => {
            this.taskCreated(e);
          }}
        />
      </header>
    );
  }
}
