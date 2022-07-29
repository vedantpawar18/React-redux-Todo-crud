import React, { useState } from 'react'

const TodoInput = ({addTodos}) => {
    const [currentTodo, setcurrentTodo]= useState("");

    const handleChange =(e)=>{
        setcurrentTodo(e.target.value);
    }

    const addTodohandler =() =>{
        const payload ={
            title:currentTodo,
            status:false
        }
        addTodos(payload)
    }

    
  return (
    <div>
        <input placeholder='add todo' value={currentTodo} onChange={handleChange} type="text" />
        <button onClick={addTodohandler}>Add</button>
    </div>
  )
}

export default TodoInput