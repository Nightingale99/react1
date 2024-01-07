import React from 'react';
import './NewTaskForm.css'

export default class NewTaskForm extends React.Component {

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
};


