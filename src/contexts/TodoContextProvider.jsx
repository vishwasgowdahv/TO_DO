import React, { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todos1 = JSON.parse(localStorage.getItem("toodi"));
    if (todos1 && todos1.length > 0) {
      setTodos(todos1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toodi", JSON.stringify(todos));
  }, [todos]);

  function addtodo(todo) {
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]);
  }
  function updatetodo(id, todo) {
    const temptodo = {
      id: id,
      todo: todo,
      completed: false,
    };
    setTodos((prev) => prev.map((e) => (e.id == id ? temptodo : e)));
  }
  function deletetodo(id) {
    const temptodos = todos.filter((e) => e.id != id);
    setTodos(temptodos);
  }
  function deletealltodo() {
    setTodos([]);
  }
  function toggleCompleted(id) {
    setTodos((prev) =>
      prev.map((e) => (e.id == id ? { ...e, completed: !e.completed } : e))
    );
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addtodo,
        updatetodo,
        deletetodo,
        toggleCompleted,
        deletealltodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
