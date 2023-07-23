import React, { useState } from "react";


const TodoApp = () => {
 
    const [todos,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState('');

    const addTodo = () =>{
        // if(newTodo.trim() !=='' ){
            setTodos([...todos,newTodo])
            setNewTodo("")
        // }
    }

    const deleteTodo = (index) =>{
        const updatedTodos = todos.filter((todo,i) => i !== index)
        setTodos(updatedTodos);
    }

  return (
    <>
      <div className="todo-app">
        <h1>ToDo</h1>
          <div className="todo-input">
            <input type ="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)  }
            placeholder="Add a new Todo.."
            />
            <button onClick={addTodo} >Add</button>
          </div>
          <ul className="todo-list">
           {todos.map((todo,index) =>(
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)} > Delete </button>
            </li>
           ))}
          </ul>
      </div>
    </>
  );
};

export default TodoApp;
