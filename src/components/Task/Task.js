import './Task.css'
import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Task = ({taskData}) => {
    return(
        <li className={ taskData.completed ? 'task completed' : taskData.editing ? 'task editing' : 'task'}>
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">{taskData.description}</span>
                <span className="created">created {formatDistanceToNow(taskData.created)} ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" value="Editing task"></input>
          </li>
    )
}

export default Task;