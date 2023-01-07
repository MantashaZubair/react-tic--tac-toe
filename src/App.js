import React, {   useState } from 'react'
 import "./App.css"
import { Column } from './Column'
  
function App (){
  const [gameState , setgameState]= useState(Array(9).fill(null))
  const [isXchance,setXchance]=useState(false)
  //  const[result , setResult]=useState({winner :"none", state:"none"})



// useEffect(()=>{
//   checkWinner();
//   checkTitle()
 
// },[gameState])

//   useEffect(()=>{
    
//   if(result.state!="none"){  
//       alert(`Player ${result.winner}! won the game`)
      
//   }
//   },[result])

 
  const SquareOnClick= (index)=>{
    if(gameState[index]!==null)
    {
      return ;
    }
  let copyState= [...gameState];
 
  copyState[index] = isXchance ? "X" :"0";
  setgameState(copyState);
  setXchance(!isXchance)
  if(gameState(Array(9).fill(copyState))){
    console.log()
  }
  // setgameState(
  //   gameState.map((val,ind)=>{
  //     if(ind==index && val==""){
  //         return isXchance;
  //     }
  //     return val;
  //   })
  // )
 }
const checkWinner=()=> {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  // for (let i = 0; i < lines.length; i++) {
  //   const [a, b, c] = lines[i]
  for ( let logic of lines){
  const [a,b,c]=logic
    if (gameState[a]!==null && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return gameState[a] 
    }
  }
  return false


//   lines.forEach((currPattern)=>{
//    const firstPlayer = gameState[currPattern[0]];
//    if(firstPlayer==="")return;
//    let foundwinningPattern = true;
//    currPattern.forEach((ind)=>{
//     if (gameState[ind]!==firstPlayer){
//       foundwinningPattern=false;
//     }
//    });
//    if(foundwinningPattern){
//     setResult({winner:isXchance, state:"won"})
//    }
//   })
 
 }



// const checkTitle = ()=>{
//   let filled = true;
//   gameState.forEach((square)=>{
//     if(square=== ""){
//     filled=false
//     }
//   });
//   if(filled){
//     setResult({winner:"no one",state:"tie"})
//   }
//  }

const winner = checkWinner()
  return(
    <>
    <div className='main'>
    <h1>React Tic Tac Toe</h1>
    <h1>player {isXchance?"x":"0"} turn</h1>
     {winner ?(<><h1>player {winner} won the game</h1>    <button  onClick={()=>setgameState(Array(9).fill(null))}>Reset Game</button></>) :(
      <>  
    <div className='row j-cont'>
      <Column className='b-bottom-right' state={gameState[0]} onclick={()=>SquareOnClick(0)}/>
      <Column className='b-bottom-right' state={gameState[1]} onclick={()=>SquareOnClick(1)}/>
      <Column  className='b-bottom' state={gameState[2]} onclick={()=>SquareOnClick(2)}/>
    </div>
    <div className='row j-cont'>
    <Column className='b-bottom-right' state={gameState[3]} onclick={()=>SquareOnClick(3)}/>
    <Column className='b-bottom-right' state={gameState[4]} onclick={()=>SquareOnClick(4)}/>
    <Column className='b-bottom' state={gameState[5]} onclick={()=>SquareOnClick(5)}/>
    </div>
    <div className='row j-cont'>
    <Column className='b-right' state={gameState[6]} onclick={()=>SquareOnClick(6)}/>
    <Column className='b-right' state={gameState[7]} onclick={()=>SquareOnClick(7)}/>
    <Column state={gameState[8]} onclick={()=>SquareOnClick(8)}/>
    </div>
      </>
    
    )}  

    </div>
   
    </>
    
  )
  
}

export default App;
