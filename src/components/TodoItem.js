// src/components/TodoItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleToDo, deleteToDo, updateToDo } from "../redux/actions/todo";
import todoItemStyles from "../styles/TodoItem.module.css"

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [newContent,setNewContent]=useState(todo.content);
  
  const handleEdit=()=>{
    if(isEdit)
    {
        dispatch(updateToDo(todo.id,newContent))
    }
    setIsEdit(!isEdit)
  }
  return (
    <div className={todoItemStyles.todoItemContainer}>
    {isEdit ? (
      <input
        type="text"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)} 
        // Update the new content in the input
        className={todoItemStyles.inputField}
      />
    ) : (
      <span
        style={{
            ...todoItemStyles.todoText,
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
        onClick={() => dispatch(toggleToDo(todo.id))}
      >
        {todo.content}
      </span>
    )}

    <button className={todoItemStyles.button} onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>

    <button onClick={handleEdit} className={todoItemStyles.button}>
      {isEdit ? 'Save' : 'Edit'} {/* Toggle between Edit and Save */}
    </button>
  </div>
  );
};

export default TodoItem;
