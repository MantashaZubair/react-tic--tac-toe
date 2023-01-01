import React, { useState } from 'react'
 import "./App.css"
import { ToDoList } from './Todolist'

function App (){
  const [addtodo, settodo]=useState("")
  const [listtodo, setListtodo] =useState([])
  
  const addme =()=>{
   setListtodo((itemlist)=>{
    return( 
      [...itemlist,addtodo]
    )
   })

   settodo("")
  }
  
  const changetodo=(e)=>{
    settodo(e.target.value)
  }
  const deleteItem=(id)=>{
    console.log("delete");
    setListtodo((itemlist)=>{
        return itemlist.filter((arrEle,index)=>{
        return index!==id
   } )})

     }
  return(
    <>
<div className='main'>
    <div className='card'>
      <h1>To Do List</h1>
      <input type="text" placeholder='Add To Do ' value={addtodo} onChange={changetodo} />
     
      <button onClick={addme}>+</button>
      <ol>
      {listtodo.map((item , index)=>{
        return <ToDoList key={index} id={index} text={item} ondelete={deleteItem}/>
      })}
      
      </ol>
    </div>
    </div>
    </>
  )
}
export default App
