import React from 'react'
 export function Column (props){
    const classes = props.className? `${props.className} square` :"square"
   return(
    <>
      <div className={classes} onClick ={props.onclick}>
        {props.state}
      </div>
    </>
   )
 
 }