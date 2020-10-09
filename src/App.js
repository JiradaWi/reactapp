import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'
// imoprt TodoList from './TodoList';
const LOCAL_STORAGE_KEY = 'todoApp.todos'
let count = 0
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()


  useEffect(() => {
    const storedtodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedtodo) {
      setTodos(storedtodo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }


  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') {
      return
    }
    console.log(count)
    count++
    console.log(count)
    setTodos(prevTodo => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false, myid: count }];
    })

    todoNameRef.current.value = null
  }

  function clearTodo() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={clearTodo}>Clear</button>

      <div>{todos.filter(todo => !todo.complete).length} left</div>
      {/* <div>0 left</div> */}
    </>
  );
}

export default App;
