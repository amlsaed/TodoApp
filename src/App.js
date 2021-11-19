import React ,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/form'
import Todolist from './components/todolist';


function App() {




// stats


  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodo,setFilteredTodo]=useState([]);

  // useEffect
useEffect(()=>{
  getLocalTodo();
},[]);

useEffect(()=>{
  filterHandler();
  saveLocalTodo();
},[todos,status]);



//functions


 const filterHandler = ()=>{
   switch(status){
     case 'completed':
     setFilteredTodo(todos.filter((todo)=> todo.completed === true));
     break;
     case'uncompleted':
     setFilteredTodo(todos.filter((todo) => todo.completed === false));
     break;
     default:
       setFilteredTodo(todos);
       break;
   }
 }
// save to local 

const saveLocalTodo = () =>{
 
    localStorage.setItem('todos',JSON.stringify(todos));
 
}

// get local todo
const getLocalTodo = () =>{
  if(localStorage.getItem('todos')===null){
     localStorage.setItem('todos',JSON.stringify([]));
  }
  else{
    let todoLocal = JSON.parse( localStorage.getItem('todos'))
    setTodos(todoLocal);
   
  }
}


 




  return (
    <div className="App">

      <img className="pencil-img" alt="pencilimage" src="./pencil.png" />
      <header>
        <h1>I Will ToDo List</h1>
      </header>

      <Form
       inputText={inputText} 
       setInputText={setInputText} 
       todos={todos} 
       setTodos={setTodos}
       setStatus={setStatus}
       />
      <Todolist 
      filteredTodo={filteredTodo}
      todos={todos} 
      setTodos={setTodos}
      />

    </div>
  );
}

export default App;
