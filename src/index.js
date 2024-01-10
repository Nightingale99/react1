import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

import App from './components/App/App.jsx';
import './components/TaskList/TaskList.jsx';
import './components/Task/Task.jsx';
import './components/NewTaskForm/NewTaskForm.jsx';
import './components/Footer/Footer.jsx';
import './components/TasksFilter/TasksFilter.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
