import './Footer.css'
import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter'

const Footer = (taskData) =>{
  const {onCompletedClear, allSelected, activeSelected, completedSelected} = taskData;
    return(
    <footer className="footer">
    <span className="todo-count">{taskData.taskData.length} items left</span>
    <TasksFilter allSelected = {() => { allSelected()} }
            activeSelected = {() => { activeSelected()} }
            completedSelected = {() => { completedSelected()} }/>
    <button className="clear-completed" onClick={ () => onCompletedClear()}>Clear completed</button>
  </footer>
  )
}
export default Footer;