import './App.css';
import React from 'react';
import Header from './components/Header';
import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';
function App() {
  return (
    <div className="App">
    <Header/>
    <TaskItem/>
    <TaskList/>
    </div>
  );
}
export default App;

