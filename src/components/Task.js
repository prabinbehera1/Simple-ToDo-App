import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(task.id, newTask));
    }
    setIsEditing(!isEditing);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {isEditing ? (
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
      ) : (
        <span onClick={handleToggle}>{task.text}</span>
      )}
      <button className="edit" onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;
