import React from 'react'

const Form = ({setInputText,todos,setTodos,inputText,setStatus}) =>{


    const inputHandler = (e)=>{
        setInputText(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()*1000}
        ]);
        setInputText("");

    }

    const statusHndler = (e)=>{
        setStatus(e.target.value)

    }

    return(
        <form>
            <input 
            value={inputText}
            onChange={inputHandler} 
            type='text' 
            className='todo-input'/>


            <button onClick={submitHandler} className='todo-button' type='submit' >
               <i className='fas fa-plus-square'></i>
            </button>


            <div className='select'> 
                <select onChange={statusHndler} name='todos' className='filter-todo'>
                        <option value="all">All</option>
                        <option value="completed">completed</option>
                        <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
}


export default Form;