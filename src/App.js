import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid'
// imoprt TodoList from './TodoList';

function App() {
  const [todo, setTodos] = useState([{

  }])
  const todoNameRef = useRef()
  const count = 0

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') {
      return
    }
    setTodos(prevTodo => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    })

//    count++

   

    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos={todo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear</button>

      <div>0 left</div>
    </>
  );
}

export default App;
