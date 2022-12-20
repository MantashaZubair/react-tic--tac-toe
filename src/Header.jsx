import React from 'react';
import './App.css';
 function Header(){
  let cssStyle = { }  
  let currdate = new Date();
   currdate = currdate.getHours()
  let greeting = ''
  if(currdate>=1 && currdate<12){
   greeting = "Good morning"
   cssStyle.color = 'green'
  }else if(currdate>=12 && currdate<20){
    greeting ="Good noon"
    cssStyle.color = 'orange'
  }else{
    greeting ="Good night"
    cssStyle.color = 'black'
  }
  let currtime = new Date().toLocaleTimeString()
  

    return(
        <>
        <div>
            <h1>Hello Sir , <span style={cssStyle}>{greeting}</span> {currtime} </h1>
        </div>
    </>
    )
 }
 export default Header;