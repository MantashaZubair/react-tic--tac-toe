
import React from "react";
import { firstname } from "./App";
export function ToDoList(){

 return(
    <>
   <firstname.Consumer>
    {(fname)=>{
      return <h1>my name is {fname}</h1>
    }}
   </firstname.Consumer>
    <h1></h1>
    </>
 )

}