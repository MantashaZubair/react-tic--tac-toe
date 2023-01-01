import React from "react";

export function ToDoList (props){
  const deletehandler=()=>{
    props.ondelete(props.id)
  }
 return(
    <>
      <div className="liststyle">
      <i className="fa-solid fa-trash" onClick={deletehandler} />
       <li>{props.text}</li>
       </div>
    </>
 )

}