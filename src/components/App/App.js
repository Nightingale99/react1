import React from "react";
import Footer from "../Footer/Footer"
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";


const App = () => {

    const taskData = [
        {description: "Completed task", completed: true, editing: false, created: new Date('2022-11-27')},
        {description: "Editing task", completed: false, editing: true, created: new Date()},
        {description: "Active task", completed: false, editing: false, created: new Date()},
    ]
    return(
        <div>
            <NewTaskForm />
            <TaskList taskData = {taskData} />
            <Footer />
        </div>
    )
}
export default App;