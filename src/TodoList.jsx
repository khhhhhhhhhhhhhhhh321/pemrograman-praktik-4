import React, { useState } from 'react'
import './TodoList.css'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  const addTodo = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setTodos([{ id: Date.now(), text, completed: false }, ...todos])
    setText('')
  }

  const toggle = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const remove = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const filteredTodos = todos.filter(t => 
    filter === 'active' ? !t.completed :
    filter === 'completed' ? t.completed :
    true
  )

  return (
    <div className="todo">
      <form onSubmit={addTodo} className="todo-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tambah todo baru..."
        />
        <button type="submit">Add</button>
      </form>

      <div className="todo-filter">
        <button onClick={() => setFilter('all')} className={filter==='all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('active')} className={filter==='active' ? 'active' : ''}>Active</button>
        <button onClick={() => setFilter('completed')} className={filter==='completed' ? 'active' : ''}>Completed</button>
      </div>

      <ul className="todo-list">
        {filteredTodos.length === 0 && <li>Tidak ada todo</li>}
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggle(todo.id)}
              />
              {todo.text}
            </label>
            <button onClick={() => remove(todo.id)}>Hapus</button>
          </li>
        ))}
      </ul>

      <p>Total: {todos.length} | Aktif: {todos.filter(t => !t.completed).length}</p>
    </div>
  )
}
