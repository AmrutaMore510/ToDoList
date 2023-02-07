import React, { useState } from "react";
import Form from "./Component/Form";
import TodoList from "./Component/TodoList";

const App =()=>{

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo]=useState(null);
return (
  <div className="container">
    <div className="app">
      <div>
        <h1>To Do List</h1>
      </div>
      <div>
        <Form 
          input ={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
      </div>
    </div>
  </div>
);
};
export default App;
