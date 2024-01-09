import './TasksFilter.css'
import React from 'react'
import PropTypes from 'prop-types'

export default class Filters extends React.Component {

    static propTypes = {
      allSelected: PropTypes.func,
      activeSelected: PropTypes.func,
      completedSelected: PropTypes.func,
    }

    state = {
      all: true,
      active: false,
      completed: false,
    }
    
    allSelected = () => {
      this.setState({
        all: true,
        active: false,
        completed: false,
      })
      this.props.allSelected()
    }

    activeSelected = () => {
      this.setState({
        all: false,
        active: true,
        completed: false,
      })
      this.props.activeSelected()
    }

    completedSelected = () => {
      this.setState({
        all: false,
        active: false,
        completed: true,
      })
      this.props.completedSelected()
    }

    render(){
      const allClass = this.state.all ? 'selected' : '';
      const activeClass = this.state.active ? 'selected' : '';
      const completedClass = this.state.completed ? 'selected' : '';
        return(
            <ul className="filters">
              <li>
                <button onClick = {() => {this.allSelected()}} 
                className = {allClass}>All</button>
              </li>
              <li>
                <button onClick = {() => {this.activeSelected()}} 
                className={activeClass}>Active</button>
              </li>
              <li>
                <button onClick = {() => {this.completedSelected()}} 
                className={completedClass}>Completed</button>
              </li>
            </ul>
            )
    }
    
}

