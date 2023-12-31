import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createRoot } from 'react-dom/client';
import './components/TaskList/TaskList';
import './components/Task/Task';
import './components/NewTaskForm/NewTaskForm';
import './components/Footer/Footer';
import './components/TasksFilter/TasksFilter';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);