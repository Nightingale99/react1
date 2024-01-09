import React from 'react';
import Footer from '../Footer/Footer';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: [],
      filter: 'all',
    };
  }

  filterChooser = () => {
    if (this.state.filter === 'all') {
      this.allSelected();
    } else if (this.state.filter === 'active') {
      this.activeSelected();
    } else {
      this.completedSelected();
    }
  };

  taskCreated = (e) => {
    if (e.split(' ').join('').length > 0) {
      this.setState({
        taskData: this.state.taskData.concat({
          description: e,
          created: new Date(),
          id: Math.random().toString(36).slice(2),
          done: false,
          hidden: false,
        }),
      });
    }
    this.filterChooser();
  };

  taskDeleted = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((item) => item.id === id);
      return {
        taskData: taskData.toSpliced(idx, 1),
      };
    });
  };

  taskDone = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((item) => item.id === id);
      const taskCopy = JSON.parse(JSON.stringify(taskData));
      taskCopy[idx].done = !taskCopy[idx].done;
      return {
        taskData: taskData.toSpliced(idx, 1, taskCopy[idx]),
      };
    });
    this.filterChooser();
  };

  onCompletedClear = () => {
    this.setState(({ taskData }) => {
      let taskCopy = JSON.parse(JSON.stringify(taskData));
      taskCopy.map((task) => {
        if (task.done) {
          const idx = taskCopy.findIndex((item) => item.id === task.id);
          taskCopy = taskCopy.toSpliced(idx, 1);
        }
        return NaN;
      });
      return {
        taskData: taskCopy,
      };
    });
  };

  allSelected = () => {
    this.setState(({ taskData }) => {
      let taskCopy = JSON.parse(JSON.stringify(taskData));
      taskCopy.map((task) => {
        const idx = taskCopy.findIndex((item) => item.id === task.id);
        taskCopy[idx].hidden = false;
        taskCopy = taskCopy.toSpliced(idx, 1, taskCopy[idx]);
        return NaN;
      });
      return {
        taskData: taskCopy,
        filter: 'all',
      };
    });
  };

  activeSelected = () => {
    this.setState(({ taskData }) => {
      let taskCopy = JSON.parse(JSON.stringify(taskData));
      taskCopy.map((task) => {
        const idx = taskCopy.findIndex((item) => item.id === task.id);
        if (!task.done) {
          taskCopy[idx].hidden = false;
        } else {
          taskCopy[idx].hidden = true;
        }
        taskCopy = taskCopy.toSpliced(idx, 1, taskCopy[idx]);
        return NaN;
      });
      return {
        taskData: taskCopy,
        filter: 'active',
      };
    });
  };

  completedSelected = () => {
    this.setState(({ taskData }) => {
      let taskCopy = JSON.parse(JSON.stringify(taskData));
      taskCopy.map((task) => {
        const idx = taskCopy.findIndex((item) => item.id === task.id);
        if (!task.done) {
          taskCopy[idx].hidden = true;
        } else {
          taskCopy[idx].hidden = false;
        }
        taskCopy = taskCopy.toSpliced(idx, 1, taskCopy[idx]);
        return NaN;
      });
      return {
        taskData: taskCopy,
        filter: 'completed',
      };
    });
  };

  render() {
    return (
      <div>
        <NewTaskForm onChange={this.taskCreated} />
        <TaskList
          taskData={this.state.taskData}
          onDeleted={(id) => {
            this.taskDeleted(id);
          }}
          onTaskDone={(id) => {
            this.taskDone(id);
          }}
        />
        <Footer
          taskData={this.state.taskData}
          onCompletedClear={() => {
            this.onCompletedClear();
          }}
          allSelected={() => {
            this.allSelected();
          }}
          activeSelected={() => {
            this.activeSelected();
          }}
          completedSelected={() => {
            this.completedSelected();
          }}
        />
      </div>
    );
  }
}
