import React, { useState } from 'react'

const EditTodo = ({setEditCurrentTodo,setTodoName}) => {

  const [editedValue,setEditedValue]=useState("")

  const saveTodo =()=>{
    setEditCurrentTodo((pre)=>{
      if(pre !== editedValue) return editedValue
    })

  } 

  return (
    <div  className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-20 right-0 flex items-center justify-center`}>
      <div className='w-1/2 h-1/2 bg-red-400 p-6  flex items-center justify-center'>
      <input type="text  " className="border py-1 px-2 rounded" placeholder="Enter your task here"
        value={editedValue}
        onChange={((e)=>{
           setEditedValue(e.target.value)        
            
        })}/>    
        <button onClick={saveTodo} className="bg-blue-600 text-white p-1 rounded ">Save</button>    


      </div>
    </div>
  )
}

export default EditTodo