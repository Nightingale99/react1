import './TaskList.css'
import React from 'react'
import Task from '../Task/Task'
import PropTypes from 'prop-types'

const TaskList = ( {taskData, onDeleted, onTaskDone} ) => {

  
  const elements = taskData.map((item) => {
    return(
      <Task key = {item.id} taskData = {item}
       onDeleted = {() => {onDeleted(item.id)}}
       onTaskDone = {() => {onTaskDone(item.id)}}/>
    )
  });
    return(
        <section className="main">
        <ul className="todo-list">
        {elements}
          
        </ul>
      </section>
    )
};

TaskList.propTypes = {
  taskData: PropTypes.array.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onTaskDone: PropTypes.func.isRequired
};

export default TaskList;