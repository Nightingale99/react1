import React from "react";
import Footer from "../Footer/Footer"
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";



export default class App extends React.Component {
    
    state = {
        taskData: [],
    }

    taskCreated = (e) => {
        if (e.target.value.length > 0){
            this.setState({
                taskData: this.state.taskData.concat({
                    description: e.target.value, 
                    created: new Date(),
                    id: Math.random().toString(36).slice(2),
                    done: false,
                    hidden: false,
                }),
            });
        }
    }

    taskDeleted = (id) => {
        this.setState(({ taskData }) =>  {
            const idx = taskData.findIndex((item) => item.id === id);
            return{
                taskData: taskData.toSpliced(idx, 1),
            }
        })
    }   

    taskDone = (id) => {
        this.setState(({ taskData }) =>  {
            const idx = taskData.findIndex((item) => item.id === id);
            let taskCopy = JSON.parse(JSON.stringify(taskData));
            taskCopy[idx].done = !taskCopy[idx].done;
            return{
                taskData: taskData.toSpliced(idx, 1, taskCopy[idx]),
            }
        })
    }

    onCompletedClear = () => {
        this.setState(({ taskData }) => {
            let taskCopy = JSON.parse(JSON.stringify(taskData));
            for (let task of taskCopy) {
                if (task.done){
                    const idx = taskCopy.findIndex((item) => item.id === task.id);
                    taskCopy = taskCopy.toSpliced(idx, 1)
                }
            }
            return({
                taskData: taskCopy,
            })
        })
    }

    allSelected = () => {
        this.setState(({ taskData }) => {
            let taskCopy = JSON.parse(JSON.stringify(taskData));
            for (let task of taskCopy) {
                const idx = taskCopy.findIndex((item) => item.id === task.id);
                taskCopy[idx].hidden = false;
                taskCopy = taskCopy.toSpliced(idx, 1, taskCopy[idx]);
            }
            return({
                taskData: taskCopy,
            })
        })
    }

    activeSelected = () => {
        this.setState(({ taskData }) => {
            let taskCopy = JSON.parse(JSON.stringify(taskData));
            for (let task of taskCopy) {
                const idx = taskCopy.findIndex((item) => item.id === task.id);
                if (!task.done){
                    taskCopy[idx].hidden = false;
                } else {
                    taskCopy[idx].hidden = true;
                    
                }
                taskCopy = taskCopy.toSpliced(idx, 1, taskCopy[idx])
            }
            return({
                taskData: taskCopy,
            })
        })
    }

    completedSelected = () => {
        this.setState(({ taskData }) => {
            let taskCopy = JSON.parse(JSON.stringify(taskData));
            for (let task of taskCopy) {
                const idx = taskCopy.findIndex((item) => item.id === task.id);
                if (!task.done){
                    taskCopy[idx].hidden = true;
                } else {
                    taskCopy[idx].hidden = false;
                    
                }
                taskCopy = taskCopy.toSpliced(idx, 1, taskCopy[idx])
            }
            return({
                taskData: taskCopy,
            })
        })
    }

    render(){
    return(
        <div>
            <NewTaskForm onChange = {this.taskCreated} />
            <TaskList taskData = {this.state.taskData} 
            onDeleted = {(id) => { this.taskDeleted(id) }}
            onTaskDone={(id) => { this.taskDone(id)}}/>
            <Footer taskData = {this.state.taskData}
            onCompletedClear = { () => {this.onCompletedClear()} }
            allSelected = {() => { this.allSelected()} }
            activeSelected = {() => { this.activeSelected()} }
            completedSelected = {() => { this.completedSelected()} }
            />
        </div>
    )
    }
}