import React from 'react'

const TodoList = ({todos, setTodos, setEditTodo}) => {

const handleDelete=({id})=>{
    setTodos(todos.filter((todo)=>todo.id !==id));
};

const handleEdit=({id})=>{
    const findTodo = todos.find((todo) => todo.id ===id);
    setEditTodo(findTodo);
}
  return (
    <div>
        {todos.map((todo)=>(
            <li className='todo-list' key={todo.id}>
                <input type="text" value={todo.title} className="list" onChange={(event)=> event.preventDefault()}/>
                <div>
                  <button className='button-edit' onClick={()=> handleEdit(todo)}>Edit</button>
                  <button className='button-delete' onClick={() => handleDelete(todo)}>Delete</button>
                </div>
                <br></br><br></br>
             </li>
        ))}
    </div>
  )
}

export  default TodoList;