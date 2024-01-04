import './TaskList.css'
import React from 'react'
import Task from '../Task/Task'


const TaskList = ( {taskData} ) => {
  const elements = taskData.map((item) => {
    return(
      <Task taskData = {item}/>
    )
  });
    return(
        <section class="main">
        <ul class="todo-list">
        {elements}
          
        </ul>
      </section>
    )
}

export default TaskList;