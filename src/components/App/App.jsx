import React, { useState } from 'react';
import Footer from '../Footer/Footer.jsx';
import NewTaskForm from '../NewTaskForm/NewTaskForm.jsx';
import TaskList from '../TaskList/TaskList.jsx';

const App = () => {
  const [taskData, setTaskData] = useState([]);
  const [filter, setFilter] = useState('all');

  const taskDeleted = (id) => {
    setTaskData((t) => {
      const idx = t.findIndex((item) => item.id === id);
      return t.toSpliced(idx, 1);
    });
  };

  const onCompletedClear = () => {
    setTaskData((t) => {
      let taskCopy = JSON.parse(JSON.stringify(t));
      taskCopy.map((task) => {
        if (task.done) {
          const idx = taskCopy.findIndex((item) => item.id === task.id);
          taskCopy = taskCopy.toSpliced(idx, 1);
        }
        return NaN;
      });
      return taskCopy;
    });
  };

  const allSelected = () => {
    setTaskData((t) => {
      let taskCopy = JSON.parse(JSON.stringify(t));
      taskCopy.map((task) => {
        const idx = taskCopy.findIndex((item) => item.id === task.id);
        taskCopy[idx].hidden = false;
        taskCopy = taskCopy.toSpliced(idx, 1, taskCopy[idx]);
        return NaN;
      });
      return taskCopy;
    });
    setFilter('all');
  };

  const activeSelected = () => {
    setTaskData((t) => {
      let taskCopy = JSON.parse(JSON.stringify(t));
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
      return taskCopy;
    });
    setFilter('active');
  };

  const completedSelected = () => {
    setTaskData((t) => {
      let taskCopy = JSON.parse(JSON.stringify(t));
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
      return taskCopy;
    });
    setFilter('completed');
  };

  const filterChooser = () => {
    if (filter === 'all') {
      allSelected();
    } else if (filter === 'active') {
      activeSelected();
    } else {
      completedSelected();
    }
  };

  const taskCreated = (e) => {
    if (e.split(' ').join('').length > 0) {
      setTaskData(taskData.concat({
        description: e,
        created: new Date(),
        id: Math.random().toString(36).slice(2),
        done: false,
        hidden: false,
      }));
    }
    filterChooser();
  };

  const taskDone = (id) => {
    setTaskData((t) => {
      const idx = t.findIndex((item) => item.id === id);
      const taskCopy = JSON.parse(JSON.stringify(t));
      taskCopy[idx].done = !taskCopy[idx].done;
      return t.toSpliced(idx, 1, taskCopy[idx]);
    });
    filterChooser();
  };

  return (
      <div>
        <NewTaskForm onChange={taskCreated} />
        <TaskList
          taskData={taskData}
          onDeleted={(id) => {
            taskDeleted(id);
          }}
          onTaskDone={(id) => {
            taskDone(id);
          }}
        />
        <Footer
          taskData={taskData}
          onCompletedClear={() => {
            onCompletedClear();
          }}
          allSelected={() => {
            allSelected();
          }}
          activeSelected={() => {
            activeSelected();
          }}
          completedSelected={() => {
            completedSelected();
          }}
        />
      </div>
  );
};
export default App;
