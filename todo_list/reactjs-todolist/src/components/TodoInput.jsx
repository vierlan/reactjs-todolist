import React, { useState } from 'react'

export default function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props

  return (
    <header>
      <input
      value={todoValue}
      onChange = {(e) => setTodoValue(e.target.value)}
      placeholder="Add a new todo..."
       />
      <button onClick={() => {
        handleAddTodo(todoValue)
        setTodoValue("")
      }}>Add</button>
    </header>
  )
}
