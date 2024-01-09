import React from 'react';
import './NewTaskForm.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {

    static propTypes = {
        onChange: PropTypes.func,
    }

    state = {
        label: '',
    }

    taskCreated = (event) => {
        if (event.key === 'Enter'){
            console.log('in')
            this.setState({
                label: '',
            });
            this.props.onChange(event);
        } else {this.setState({
            label: event.target.key,
        })}
    }

    render(){
    return(
        <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus
        onKeyDown={this.taskCreated}
        value = {this.state.value}/>
        </header>
    )
    }
}


