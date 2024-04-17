//The input bar and add task button logic has been integrated into the TaskList component

import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleMarkAsDone = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? <del>{task}</del> : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="task-input"
            />
            <button onClick={handleAddTask} className="add-task-button">Add Task</button>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <div key={index} className="task-container">
                        <div className="task-content">
                            <li className="task-name">{task}</li>
                                <div className="task-action" style={{marginLeft:'auto'}}>
                                    
                                    <span onClick={() => handleDeleteTask(index)} className="task-action-circle">🗑️</span>
                                    <span onClick={() => handleMarkAsDone(index)} className="task-action-circle">✅</span>
                                </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
