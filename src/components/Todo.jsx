import React, { useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
// import EditTodo from './EditTodo';

const Todo = () => {      
      const [todoName,setTodoName]=useState("")
      const [showTodoData,setShowTodoData]=useState([])

     
      // const[editCurrentClick,setEditCurrentClick]=useState(false)
      const [editIndex,setEditIndex] =useState(null)


      const addtodo =()=>{
        if (editIndex !== null) {
          // If editIndex is not null, it means we are editing an existing todo
          const updatedTodos = [...showTodoData];
          updatedTodos[editIndex] = todoName;
          setShowTodoData(updatedTodos);
          setEditIndex(null); // Reset editIndex after editing
        } 
        else{
           setShowTodoData(pre=>
            [...pre,todoName]            
        )
        setTodoName('')
        }

      }

      const removeTodo =(index)=>{
        console.log(index)
        setShowTodoData((pre)=> {
            const newTodos =[...pre]
            newTodos.splice(index,1);
            return newTodos
        })
      }

      const editTodo =(index)=>{        
        setEditIndex(index);
        setTodoName(showTodoData[index]);
  
      }

    
      

  return (
    <div className=" w-10/12 mx-auto mt-10 border-black shadow-sm h-screen">
    <h1 className="text-gray-500  text-center font-bold text-xl">Todo App</h1>
    <div className="m-4 w-full">      
        <input type="text  " className="border py-1 px-2 rounded" placeholder="Enter your task here"
        value={todoName}
        onChange={((e)=>{
            setTodoName(e.target.value)
        })}/>    
        <button onClick={addtodo} className="bg-blue-600 text-white p-1 rounded ">{editIndex !== null ? 'Update' : 'Submit'}</button>      
    </div> 

    {
        showTodoData.length  > 0 && (
        <ul  className='border '>
            {showTodoData.map((val,i)=>{
                return(
                    <li className='shadow p-1 mt-2 w-full flex items-center relative' key={i}>{val}                   
                        <button onClick={()=>removeTodo(i)}><FaDeleteLeft className='text-xl font-bold absolute  top-0 right-1'/></button>
                        <button onClick={()=>
                          editTodo(i)                  
                        }><MdEdit  className='text-xl absolute top-0 right-5 font-bold'/>
                        </button> 
                    </li>
                    )
                  })}
     
        </ul>
        )        
        
      }
      {/* {
        editCurrentTodo.length > 0 &&(
          <EditTodo/>
        )
      } */}
      

   
  </div>
  )
}

export default Todo