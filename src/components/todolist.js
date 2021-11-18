import React from 'react';
import Todo from './todo'

const Todolist = ({todos,setTodos,filteredTodo}) =>{



    return(
        <div className="todo-container">
           <ul className="todo-list">
               {filteredTodo.map((todo)=>(
                   <Todo 
                   todo={todo} 
                   text={todo.text} 
                   key={todo.id} 
                   todos={todos} 
                   setTodos={setTodos}/>
               ))}
           </ul>
        </div>
    )
}

export default Todolist;