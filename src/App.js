import React, { useState, useRef, useEffect } from "react";
import TodoList from "./components/todoList/TodoList";

const LOCAL_STORAGE_KEY = "todoApp.todos";
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleComlete() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  function addTodo(e) {
    let name = todoNameRef.current.value; //inputi nshanakutyunnenq vercnum
    if (name !== "") {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { id: 500000000 * Math.random(), name: name, completed: false },
        ];
      });
      todoNameRef.current.value = null;
    }
    return;
  }
  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={addTodo}>add todo</button>
      <button onClick={handleComlete}>Completed</button>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
