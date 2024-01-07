import './TaskList.css'
import React from 'react'
import Task from '../Task/Task'


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
}

export default TaskList;